import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

@Injectable()
export class GoogleCloudStorageService {
  getFile(_fileId: string) {
      throw new Error('Method not implemented.');
  }
  private storage: Storage;
  private bucketName = 'residencias-bucket-uploads'; // Coloca aquí el nombre de tu bucket de Google Cloud Storage

  constructor() {
    this.storage = new Storage({
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS, // Ruta a tu archivo JSON de clave de servicio
      projectId: 'ygalvanic-vim-442707-f1', // ID de tu proyecto en Google Cloud
    });
  }

  async uploadFile(file: Express.Multer.File, p0: string): Promise<string> {
    const bucket = this.storage.bucket(this.bucketName);
    const blob = bucket.file(`${uuidv4()}-${file.originalname}`);
    
    const blobStream = blob.createWriteStream({
      resumable: false,
      contentType: file.mimetype,
    });

    return new Promise((resolve, reject) => {
      blobStream.on('error', (err) => {
        reject(`Unable to upload file, something went wrong: ${err}`);
      });

      blobStream.on('finish', () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        resolve(publicUrl); // URL pública para acceder al archivo subido
      });

      blobStream.end(file.buffer);
    });
  }
}
