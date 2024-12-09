import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { PrismaModule } from '../../prisma/prisma.module'; // Asegúrate de importar PrismaModule
import { AuthModule } from '../auth/auth.module';
@Module({
  imports: [PrismaModule, AuthModule], // Importa PrismaModule y AuthModule aquí
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
