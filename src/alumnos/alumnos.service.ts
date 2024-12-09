import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';

@Injectable()
export class AlumnosService {
  private storage: Storage;
  private bucketName: string;

  constructor() {
    this.storage = new Storage();
    this.bucketName = process.env.GOOGLE_CLOUD_BUCKET;
  }

  async subirArchivo(file: Express.Multer.File, studentId: string): Promise<string> {
    try {
      const fileName = `${studentId}/${file.originalname}`;
      const bucket = this.storage.bucket(this.bucketName);
      const blob = bucket.file(fileName);

      const stream = blob.createWriteStream({
        resumable: false,
        contentType: file.mimetype,
      });

      return new Promise((resolve, reject) => {
        stream.on('finish', () => {
          resolve(`Archivo subido exitosamente a ${fileName}`);
        }).on('error', (error) => {
          reject(new InternalServerErrorException(`Error al subir archivo: ${error.message}`));
        }).end(file.buffer);
      });
    } catch (error) {
      throw new InternalServerErrorException(`Error en la subida del archivo: ${(error as any).message}`);
    }
  }

  async listarArchivos(studentId: string): Promise<string[]> {
    try {
      const bucket = this.storage.bucket(this.bucketName);
      const [files] = await bucket.getFiles({ prefix: `${studentId}/` });

      if (files.length === 0) {
        throw new InternalServerErrorException('No se encontraron archivos para este estudiante.');
      }

      return files.map(file => file.name);
    } catch (error) {
      throw new InternalServerErrorException(`Error al listar archivos: ${(error as any).message}`);
    }
  }
}
