import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Importa PrismaService

@Injectable()
export class AsignacionAsesoresService {
  constructor(private readonly prisma: PrismaService) {}

  // Método para asignar un asesor a un proyecto o usuario
  async asignarAsesor(asesorId: string, usuarioId: string, proyectoId: string) {
    // Aquí puedes usar Prisma para crear una relación entre los IDs de asesor, usuario y proyecto.
    return this.prisma.asignacionAsesor.create({
      data: {
        asesorId, // ID del asesor
        usuarioId, // ID del usuario
        proyectoId, // ID del proyecto
      },
    });
  }
}
