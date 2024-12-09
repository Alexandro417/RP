import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { Roles } from '../roles/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';

@Controller('docente')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DocenteController {
  
  @Post('hacer-observacion')
  @Roles('docente')
  makeObservation(@Body('proyectoId') proyectoId: string, @Body('observacion') observacion: string) {
    // lógica para hacer observación
  }
}
