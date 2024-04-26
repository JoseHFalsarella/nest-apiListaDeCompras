import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListaModule } from './lista/lista.module';

@Module({
  imports: [ListaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
