import { Injectable } from '@nestjs/common';
import { GoogleCloudStorageService } from '../projects/google-cloud-storage.service';

@Injectable()
export class GTUVService {
  constructor(private readonly googleCloudStorageService: GoogleCloudStorageService) {}

  async subirConvenio(file: Express.Multer.File) {
    return this.googleCloudStorageService.uploadFile(file, 'convenios');
  }

  async obtenerConvenios() {
    return this.googleCloudStorageService.getFile('convenios');
  }
}
