import { Module } from '@nestjs/common';
import { ListaController } from './lista.controller';
import { ListaService } from './lista.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from 'src/Entity/item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemEntity])
  ],
  controllers: [ListaController],
  providers: [ListaService]
})
export class ListaModule {}
