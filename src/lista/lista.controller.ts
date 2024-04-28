import { Controller, Get } from '@nestjs/common';

@Controller('lista')
export class ListaController {

    @Get()
    geatAllItems(){
        return ['Item1', 'Item2']
    }
}
