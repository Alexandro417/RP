import { Controller, Post, Get, UseGuards, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { GoogleCloudStorageService } from '../projects/google-cloud-storage.service';
import { Roles } from '../roles/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';

@Controller('gtuv')
@UseGuards(JwtAuthGuard, RolesGuard)
export class GTUVController {
  
  constructor(private readonly googleCloudStorageService: GoogleCloudStorageService) {}

  @Post('subir-convenio')
  @Roles('admin', 'coordinador')
  @UseInterceptors(FileInterceptor('file'))
  async uploadConvenio(@UploadedFile() file: Express.Multer.File) {
    return this.googleCloudStorageService.uploadFile(file, 'convenios');
  }

  @Get('descargar-convenios')
  @Roles('admin', 'coordinador')
  async getConvenios() {
    return this.googleCloudStorageService.getFile('convenios');
  }
}
