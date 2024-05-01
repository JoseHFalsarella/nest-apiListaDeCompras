import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDto } from 'src/DTO/create-item.dto';
import { ItemEntity } from 'src/Entity/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListaService {

    constructor(@InjectRepository(ItemEntity) private repo: Repository<ItemEntity>) {

    }

    async getAllItems(){
        return await this.repo.find();
    }

    async createItem(createItemDto: CreateItemDto) {
        const item = new ItemEntity();
        const {nome, quantity} = createItemDto;
        item.nome = nome;
        item.quantity = quantity;
        item.status = false;

        this.repo.create(item);
        return await this.repo.save(item);
    }

    async updateItem(id: number, status: boolean) {
        try{
            await this.repo.update({id}, {status});
            return this.repo.findOne({where: {id}});
        } catch (err) { 
            throw new InternalServerErrorException(`Algo deu errado`);
        }
        
    }

    async deleteItem(id: number){
        try{
            return await this.repo.delete({id});
        } catch (err) { 
            throw new InternalServerErrorException(`Algo deu errado`);
        }
    }
    
}
