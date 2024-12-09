import { Controller, Post, UseGuards, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { GoogleCloudStorageService } from '../projects/google-cloud-storage.service';
import { Roles } from '../roles/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';

@Controller('alumnos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AlumnosController {
  
  constructor(private readonly googleCloudStorageService: GoogleCloudStorageService) {}

  @Post('subir-archivo')
  @Roles('alumno')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.googleCloudStorageService.uploadFile(file, 'alumnos');
  }
}

