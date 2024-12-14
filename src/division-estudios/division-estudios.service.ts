import { Injectable } from '@nestjs/common';
import { GoogleCloudStorageService } from '../projects/google-cloud-storage.service';

@Injectable()
export class DivisionEstudiosService {
  constructor(private readonly googleCloudStorageService: GoogleCloudStorageService) {}

  async revisarArchivo(fileId: string) {
    return this.googleCloudStorageService.getFile(fileId);
  }

  async enviarRetroalimentacion(fileId: string, retroalimentacion: string) {
    // Lógica para enviar retroalimentación, podrías almacenar esto en la BD o en un servicio
    return `Retroalimentación enviada para el archivo ${fileId}: ${retroalimentacion}`;
  }
}
