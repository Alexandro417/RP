import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { PrismaModule } from '../../prisma/prisma.module'; // Asegúrate de importar PrismaModule

@Module({
  imports: [PrismaModule], // Importa PrismaModule aquí
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
