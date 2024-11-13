/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ServeStaticModule} from '@nestjs/serve-static';
import { join } from 'path'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', '..', 'front/.next'), serveRoot: '/static',}),
    TypeOrmModule.forRoot({
      type: 'postgres', // Tipo de base de datos (Postgres)
      host: 'localhost', // Dirección del host
      port: 5432, // Puerto de conexión
      username: 'postgres', // Usuario de la base de datos
      password: 'admin', // Contraseña de la base de datos
      database: 'restaurantedb', // Nombre de la base de datos
      autoLoadEntities: true, // Carga automática de entidades
      synchronize: true, // Sincronización automática (solo para desarrollo)
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
