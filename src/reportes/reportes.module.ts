import { Module } from '@nestjs/common';
import { ReportesService } from './reportes.service';
import { ReportesController } from './reportes.controller';
import { PrismaService } from '../../prisma/prisma.service'; // Si usas Prisma

@Module({
  imports: [],
  controllers: [ReportesController],
  providers: [ReportesService, PrismaService], // Asegúrate de tener Prisma o el servicio que vas a usar
})
export class ReportesModule {}
