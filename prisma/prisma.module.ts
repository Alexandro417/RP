import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';  // Asegúrate de importar el servicio Prisma

@Module({
  providers: [PrismaService],  // Registra PrismaService
  exports: [PrismaService],    // Exporta PrismaService para que otros módulos puedan usarlo
})
export class PrismaModule {}
