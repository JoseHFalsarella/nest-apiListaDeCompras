import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from 'src/Entity/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListaService {

    constructor(@InjectRepository(ItemEntity) private repo: Repository<ItemEntity>) {

    }

    async getAllItems(){
        return await this.repo.find();
    }

    async createItem(nome: string, quantity: number) {
        const item = new ItemEntity();
        item.nome = nome;
        item.quantity = quantity;
        item.status = false;

        this.repo.create(item);
        return await this.repo.save(item);
    }
}
