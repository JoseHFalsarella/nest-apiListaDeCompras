import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ListaService } from './lista.service';
import { CreateItemDto } from 'src/DTO/create-item.dto';

@Controller('lista')
export class ListaController {

    constructor(private listaService: ListaService) {}

    @Get()
    getAllItems(){
        return this.listaService.getAllItems();
    }

    @Post()
    createNewItem(@Body(ValidationPipe) data: CreateItemDto){
        return this.listaService.createItem(data);
    }
}
