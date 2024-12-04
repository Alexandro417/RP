import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // Módulo de usuarios
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy'; // Estrategia JWT
import { LocalStrategy } from './local.strategy'; // Estrategia local
import { ConfigModule, ConfigService } from '@nestjs/config'; // Importar Configuración

@Module({
  imports: [
    ConfigModule.forRoot(),  // Cargar variables de entorno desde el archivo .env
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),  // Obtener JWT_SECRET de las variables de entorno
        signOptions: { expiresIn: '600s' },
      }),
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}

