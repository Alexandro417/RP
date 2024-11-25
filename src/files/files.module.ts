import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { GoogleCloudStorageService } from '../projects/google-cloud-storage.service'; // Importar el servicio de Google Cloud Storage

@Module({
  controllers: [FilesController], // Controlador para manejar las rutas de carga de archivos
  providers: [FilesService, GoogleCloudStorageService], // Servicio de archivos y el servicio de Google Cloud Storage
})
export class FilesModule {}
