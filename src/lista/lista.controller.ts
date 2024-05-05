import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { ListaService } from './lista.service';
import { CreateItemDto } from 'src/DTO/create-item.dto';
//import { AuthGuard } from '@nestjs/passport';
/*
import { UserEntity } from 'src/Entity/user.entity';
import { User } from 'src/auth/user.decorator';
*/

@Controller('lista')
//@UseGuards(AuthGuard())
export class ListaController {

    constructor(private listaService: ListaService) {}

    @Get()
    getAllItems(/*@User() user: UserEntity*/){
        return this.listaService.getAllItems(/*user*/);
    }

    @Post()
    createNewItem(@Body(ValidationPipe) data: CreateItemDto,
    /*@User() user: UserEntity*/){
        return this.listaService.createItem(data/*, user*/);
    }

    @Patch(':id')
    updateItemStatus(@Param('id') id: number, @Body('status') status: boolean,
    /*@User() user: UserEntity*/){
        return this.listaService.updateItem(id, status/*, user*/);
    }

    @Delete(':id')
    deleteItem(@Param('id') id: number,
    /*@User() user: UserEntity*/){
        return this.listaService.deleteItem(id/*, user*/);
    }
}
