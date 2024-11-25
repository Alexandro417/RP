import { Module } from '@nestjs/common';
import { GoogleCloudStorageService } from './google-cloud-storage.service';

@Module({
  providers: [GoogleCloudStorageService],
  exports: [GoogleCloudStorageService],  // Asegúrate de exportar el servicio
})
export class GoogleCloudStorageModule {}
