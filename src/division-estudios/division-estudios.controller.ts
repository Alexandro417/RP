import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { GoogleCloudStorageService } from '../projects/google-cloud-storage.service';
import { Roles } from '../roles/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';

@Controller('division-estudios')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DivisionEstudiosController {
  
  constructor(private readonly googleCloudStorageService: GoogleCloudStorageService) {}

  @Get('revisar-archivo/:fileId')
  @Roles('coordinador')
  async reviewFile(@Param('fileId') fileId: string) {
    return this.googleCloudStorageService.getFile(fileId);
  }
}
