import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { GoogleCloudStorageModule } from '../google-cloud-storage/google-cloud-storage.module';
import { PrismaModule } from '../../prisma/prisma.module';  // Importa PrismaModule

@Module({
  imports: [GoogleCloudStorageModule, PrismaModule],  // Asegúrate de importar PrismaModule
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
