import { Controller, Get, Param, Put, Delete, Body, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { User, Project } from '@prisma/client';
import { RolesGuard } from '../roles/roles.guard'; // Importar el guard de roles

@Controller('admin')
@UseGuards(RolesGuard) // Aplicar el guard a todas las rutas del controlador
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Obtener todos los usuarios
  @Get('users')
  async getAllUsers(): Promise<User[]> {
    return this.adminService.findAllUsers();
  }

  // Actualizar el rol de un usuario
  @Put('users/:id/role')
  async updateUserRole(@Param('id') id: string, @Body('role') role: string): Promise<User> {
    return this.adminService.updateUserRole(id, role);
  }

  // Eliminar un usuario
  @Delete('users/:id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return this.adminService.deleteUser(id);
  }

  // Obtener todos los proyectos
  @Get('projects')
  async getAllProjects(): Promise<Project[]> {
    return this.adminService.findAllProjects();
  }

  // Actualizar el estado de un proyecto
  @Put('projects/:id/status')
  async updateProjectStatus(@Param('id') id: string, @Body('status') status: string): Promise<Project> {
    return this.adminService.updateProjectStatus(id, status);
  }

  // Eliminar un proyecto
  @Delete('projects/:id')
  async deleteProject(@Param('id') id: string): Promise<void> {
    return this.adminService.deleteProject(id);
  }
}
