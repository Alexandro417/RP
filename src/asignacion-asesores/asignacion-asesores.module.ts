import { Module } from '@nestjs/common';
import { AsignacionAsesoresController } from './asignacion-asesores.controller';
import { AsignacionAsesoresService } from './asignacion-asesores.service';
import { PrismaService } from '../../prisma/prisma.service'; // Importa el servicio de Prisma

@Module({
  controllers: [AsignacionAsesoresController], // El controlador para manejar las rutas
  providers: [AsignacionAsesoresService, PrismaService], // El servicio para manejar la lógica y PrismaService
})
export class AsignacionAsesoresModule {}
