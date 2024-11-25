import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Importa Prisma si lo estás utilizando

@Injectable()
export class ReportesService {
  constructor(private prisma: PrismaService) {}

  // Generar un reporte de todos los usuarios
  async generarReporteUsuarios() {
    const usuarios = await this.prisma.user.findMany();
    // Aquí puedes procesar los datos y generar un informe según tus necesidades
    return usuarios;
  }

  // Generar un reporte de todos los proyectos
  async generarReporteProyectos() {
    const proyectos = await this.prisma.project.findMany();
    return proyectos;
  }

  // Otros métodos para generar diferentes tipos de reportes...
}
