import { Module } from '@nestjs/common';
import { ListaController } from './lista.controller';
import { ListaService } from './lista.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from 'src/Entity/item.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemEntity]),
    AuthModule
  ],
  controllers: [ListaController],
  providers: [ListaService]
})
export class ListaModule {}
