import { Controller, Get, Post, UseGuards, Body, Param } from '@nestjs/common';
import { Roles } from '../roles/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../roles/roles.guard';
import { DocenteService } from './docente.service';

@Controller('docente')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DocenteController {
  constructor(private readonly docenteService: DocenteService) {}

  // Obtener las etapas del proyecto asignado
  @Get('etapas/:proyectoId')
  @Roles('docente')
  async getEtapas(@Param('proyectoId') proyectoId: string) {
    return await this.docenteService.obtenerEtapas(proyectoId);
  }

  // Hacer observación sobre un reporte específico
  @Post('hacer-observacion')
  @Roles('docente')
  async makeObservation(
    @Body('proyectoId') proyectoId: string,
    @Body('etapaId') etapaId: string,
    @Body('observacion') observacion: string,
  ) {
    return await this.docenteService.hacerObservacion(proyectoId, etapaId, observacion);
  }
}
