import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { Evaluacion } from '@prisma/client';

@Controller('evaluacion')
export class EvaluacionController {
  constructor(private readonly evaluacionService: EvaluacionService) {}

  // Crear una nueva evaluación
  @Post()
  async create(
    @Body('proyectoId') proyectoId: string,
    @Body('asesorId') asesorId: string,
    @Body('calificacion') calificacion: number,
    @Body('comentarios') comentarios: string,
  ): Promise<Evaluacion> {
    return this.evaluacionService.create(proyectoId, asesorId, calificacion, comentarios);
  }

  // Obtener todas las evaluaciones
  @Get()
  async findAll(): Promise<Evaluacion[]> {
    return this.evaluacionService.findAll();
  }

  // Obtener una evaluación por su ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Evaluacion | null> {
    return this.evaluacionService.findOne(id);
  }

  // Actualizar una evaluación
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<Evaluacion>,
  ): Promise<Evaluacion> {
    return this.evaluacionService.update(id, updateData);
  }

  // Eliminar una evaluación
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.evaluacionService.remove(id);
  }
}
