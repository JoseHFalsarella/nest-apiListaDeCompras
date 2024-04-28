import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from 'src/Entity/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListaService {

    constructor(@InjectRepository(ItemEntity) private repo: Repository<ItemEntity>) {

    }

    async geatAllItems(){
        return await this.repo.find();
    }
}
