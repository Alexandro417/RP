import { Controller, Get } from '@nestjs/common';
import { ReportesService } from './reportes.service';

@Controller('reportes')
export class ReportesController {
  constructor(private readonly reportesService: ReportesService) {}

  // Ruta para obtener un reporte de usuarios
  @Get('usuarios')
  async getReporteUsuarios() {
    return this.reportesService.generarReporteUsuarios();
  }

  // Ruta para obtener un reporte de proyectos
  @Get('proyectos')
  async getReporteProyectos() {
    return this.reportesService.generarReporteProyectos();
  }

  // Otros endpoints para diferentes reportes...
}
