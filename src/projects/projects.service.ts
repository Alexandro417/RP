import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Project } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  // Crear un nuevo proyecto
  async create(userId: string, title: string, description: string, pdfUrl?: string): Promise<Project> {
    return this.prisma.project.create({
      data: {
        userId,
        title,
        description,
        pdfUrl,
      },
    });
  }

  // Obtener todos los proyectos
  async findAll(): Promise<Project[]> {
    return this.prisma.project.findMany({
      include: { user: true }, // Incluye la relación con el usuario
    });
  }

  // Obtener un proyecto por su ID
  async findOne(id: string): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: { id },
      include: { user: true }, // Incluye la relación con el usuario
    });
  }

  // Actualizar un proyecto
  async update(id: string, updateData: Partial<Project>): Promise<Project> {
    return this.prisma.project.update({
      where: { id },
      data: updateData,
    });
  }

  // Eliminar un proyecto
  async remove(id: string): Promise<void> {
    await this.prisma.project.delete({
      where: { id },
    });
  }
}
