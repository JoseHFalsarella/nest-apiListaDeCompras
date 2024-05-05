import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDto } from 'src/DTO/create-item.dto';
import { ItemEntity } from 'src/Entity/item.entity';
import { UserEntity } from 'src/Entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListaService {

    constructor(@InjectRepository(ItemEntity) private repo: Repository<ItemEntity>) {

    }

    async getAllItems(/*user: UserEntity*/){
        const query = await this.repo.createQueryBuilder('item');

        /*query.where('item.userId = :userId', {userId: user.id});*/
        
        try {
            return await query.getMany();
        } catch (err) {
            throw new NotFoundException(`Nenhum item encontrado.`); 
        }
    }

    async createItem(createItemDto: CreateItemDto/*, user: UserEntity*/) {
        const item = new ItemEntity();
        const {nome, quantity} = createItemDto;
        item.nome = nome;
        item.quantity = quantity;
        item.status = false;
        /*item.userId = user.id;*/

        this.repo.create(item);
        return await this.repo.save(item);
    }

    async updateItem(id: number, status: boolean/*, user: UserEntity*/) {

        try{
            await this.repo.update({id/*, userId: user.id*/}, {status: status});
            return this.repo.findOne({where: {id: id}});
        } catch (err) { 
            throw new InternalServerErrorException(`Algo deu errado`);
        }
        
    }

    async deleteItem(id: number/*, user: UserEntity*/){
        const result = await this.repo.delete({id/*, userId: user.id*/});

        if(result.affected === 0){
            throw new NotFoundException(`Item não deletado.`);
        } else {
            return {success: true};
        }
    }
    
}
