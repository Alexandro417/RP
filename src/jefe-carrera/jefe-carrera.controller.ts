import { Controller, Patch, Post, UseGuards, Param, Body } from '@nestjs/common';
import { Roles } from '../roles/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';

@Controller('jefe-carrera')
@UseGuards(JwtAuthGuard, RolesGuard)
export class JefeCarreraController {
  
  @Patch('aceptar-protocolo/:proyectoId')
  @Roles('jefe-carrera')
  acceptProtocol(@Param('proyectoId') proyectoId: string) {
    // lógica para aceptar protocolo
  }

  @Post('asignar-asesor')
  @Roles('jefe-carrera')
  assignAdvisor(@Body('proyectoId') proyectoId: string, @Body('asesorId') asesorId: string) {
    // lógica para asignar asesor
  }
}
