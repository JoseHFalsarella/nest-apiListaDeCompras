import { Module, Options } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListaModule } from './lista/lista.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
//import { AuthModule } from './auth/auth.module';

const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nestjs',
  autoLoadEntities: true,
  synchronize: true,
};

@Module({
  imports: [
    ListaModule,
    TypeOrmModule.forRoot(ormOptions),
    //AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
