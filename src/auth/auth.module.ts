import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // Módulo de usuarios
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy'; // Definir esta estrategia
import { LocalStrategy } from './local.strategy'; // Definir esta estrategia
import { jwtConstants } from './jwt.constants';

@Module({
  imports: [
    UsersModule,  // Asegúrate de tener un módulo de usuarios
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret, // Cambiar por una clave más segura
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy,JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
