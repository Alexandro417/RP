import { EvaluacionService } from './evaluacion.service';
import { Evaluacion } from '@prisma/client';
export declare class EvaluacionController {
    private readonly evaluacionService;
    constructor(evaluacionService: EvaluacionService);
    create(proyectoId: string, asesorId: string, calificacion: number, comentarios: string): Promise<Evaluacion>;
    findAll(): Promise<Evaluacion[]>;
    findOne(id: string): Promise<Evaluacion | null>;
    update(id: string, updateData: Partial<Evaluacion>): Promise<Evaluacion>;
    remove(id: string): Promise<void>;
}
