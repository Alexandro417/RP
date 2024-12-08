import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config'; // Asegúrate de importar el ConfigModule
import { JwtStrategy } from './jwt.strategy'; // La estrategia JWT

@Module({
  imports: [
    ConfigModule.forRoot(), // Asegúrate de cargar las variables de entorno
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Usa la variable de entorno
      signOptions: { expiresIn: '60m' }, // Configura el tiempo de expiración si es necesario
    }),
  ],
  providers: [JwtStrategy],
})
export class AuthModule {}

