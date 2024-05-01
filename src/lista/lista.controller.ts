import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
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

    @Patch(':id')
    updateItemStatus(@Param('id') id: number, @Body('status') status: boolean){
        return this.listaService.updateItem(id, status);
    }

    @Delete(':id')
    deleteItem(@Param('id') id: number){
        return this.listaService.deleteItem(id);
    }
}
