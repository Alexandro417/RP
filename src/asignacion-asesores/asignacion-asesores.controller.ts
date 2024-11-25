import { Controller, Post, Body } from '@nestjs/common';
import { AsignacionAsesoresService } from './asignacion-asesores.service';

@Controller('asignacion-asesores')
export class AsignacionAsesoresController {
  constructor(private readonly asignacionAsesoresService: AsignacionAsesoresService) {}

  // Ruta para asignar un asesor a un proyecto o usuario
  @Post('asignar')
  async asignarAsesor(
    @Body('asesorId') asesorId: string,
    @Body('usuarioId') usuarioId: string,
    @Body('proyectoId') proyectoId: string,
  ) {
    return this.asignacionAsesoresService.asignarAsesor(asesorId, usuarioId, proyectoId);
  }
}
