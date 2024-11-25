import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';  // Para manejar la subida de archivos
import { GoogleCloudStorageService } from '../google-cloud-storage/google-cloud-storage.service';  // Servicio de Google Cloud Storage

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly gcsService: GoogleCloudStorageService,  // Inyectar el servicio de Google Cloud Storage
  ) {}

  // Crear un nuevo proyecto
  @Post()
  async create(
    @Body('userId') userId: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('pdfUrl') pdfUrl?: string,
  ): Promise<Project> {
    return this.projectsService.create(userId, title, description, pdfUrl);
  }

  // Subir un archivo PDF
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))  // Interceptor para manejar el archivo
  async uploadPdf(@UploadedFile() file: Express.Multer.File): Promise<{ message: string; fileUrl: string }> {
    const publicUrl = await this.gcsService.uploadFile(file);  // Llamar al servicio de Google Cloud Storage
    return { message: 'Archivo subido exitosamente', fileUrl: publicUrl };  // Retornar la URL pública del archivo subido
  }

  // Obtener todos los proyectos
  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  // Obtener un proyecto por ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Project | null> {
    return this.projectsService.findOne(id);
  }

  // Actualizar un proyecto
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateData: Partial<Project>): Promise<Project> {
    return this.projectsService.update(id, updateData);
  }

  // Eliminar un proyecto
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.projectsService.remove(id);
  }
}
