import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Importar el servicio Prisma
import { Evaluacion } from '@prisma/client';

@Injectable()
export class EvaluacionService {
  constructor(private prisma: PrismaService) {}

  // Crear una nueva evaluación
  async create(proyectoId: string, asesorId: string, calificacion: number, comentarios?: string): Promise<Evaluacion> {
    return this.prisma.evaluacion.create({
      data: {
        proyectoId,
        asesorId,
        calificacion,
        comentarios,
      },
    });
  }

  // Obtener todas las evaluaciones
  async findAll(): Promise<Evaluacion[]> {
    return this.prisma.evaluacion.findMany();
  }

  // Obtener una evaluación por su ID
  async findOne(id: string): Promise<Evaluacion | null> {
    return this.prisma.evaluacion.findUnique({
      where: { id },
    });
  }

  // Actualizar una evaluación
  async update(id: string, updateData: Partial<Evaluacion>): Promise<Evaluacion> {
    return this.prisma.evaluacion.update({
      where: { id },
      data: updateData,
    });
  }

  // Eliminar una evaluación
  async remove(id: string): Promise<void> {
    await this.prisma.evaluacion.delete({
      where: { id },
    });
  }
}

export class EvaluacionModule {}