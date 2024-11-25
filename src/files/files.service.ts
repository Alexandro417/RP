import { Injectable } from '@nestjs/common';
import { GoogleCloudStorageService } from '../projects/google-cloud-storage.service';

@Injectable()
export class FilesService {
  constructor(private readonly googleCloudStorageService: GoogleCloudStorageService) {}

  async uploadFile(file: Express.Multer.File) {
    return this.googleCloudStorageService.uploadFile(file); // Delegamos la carga al servicio de Google Cloud Storage
  }
}
