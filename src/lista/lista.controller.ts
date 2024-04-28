import { Body, Controller, Get, Post } from '@nestjs/common';
import { ListaService } from './lista.service';

@Controller('lista')
export class ListaController {

    constructor(private listaService: ListaService) {}

    @Get()
    getAllItems(){
        return this.listaService.getAllItems();
    }

    @Post()
    createNewItem(@Body() data){
        const {nome, quantity} = data;

        return this.listaService.createItem(nome, quantity);
    }
}
