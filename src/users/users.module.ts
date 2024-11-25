// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [UsersService, PrismaService], // Registrar PrismaService
  controllers: [UsersController],
  exports: [UsersService], // Exportar UsersService para que otros módulos lo usen
})
export class UsersModule {}
