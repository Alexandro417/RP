import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User, Project, Role } from '@prisma/client';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  // Obtener todos los usuarios
  async findAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Actualizar el rol de un usuario
  async updateUserRole(userId: string, role: Role): Promise<User> {
    if (!Object.values(Role).includes(role)) {
      throw new ForbiddenException('Invalid role');
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: { role },
    });
  }

  // Eliminar un usuario
  async deleteUser(userId: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id: userId },
    });
  }

  // Obtener todos los proyectos
  async findAllProjects(): Promise<Project[]> {
    return this.prisma.project.findMany();
  }

  // Cambiar el estado de un proyecto
  async updateProjectStatus(projectId: string, status: string): Promise<Project> {
    if (!['pending', 'accepted', 'rejected'].includes(status)) {
      throw new ForbiddenException('Invalid status');
    }

    return this.prisma.project.update({
      where: { id: projectId },
      data: { status },
    });
  }

  // Eliminar un proyecto
  async deleteProject(projectId: string): Promise<void> {
    await this.prisma.project.delete({
      where: { id: projectId },
    });
  }
}
