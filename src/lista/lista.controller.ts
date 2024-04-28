import { Controller, Get } from '@nestjs/common';
import { ListaService } from './lista.service';

@Controller('lista')
export class ListaController {

    constructor(private listaService: ListaService) {}

    @Get()
    geatAllItems(){
        return this.listaService.geatAllItems();
    }
}
