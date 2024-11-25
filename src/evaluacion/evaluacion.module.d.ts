import { PrismaService } from '../../prisma/prisma.service';
import { Evaluacion } from '@prisma/client';
export declare class EvaluacionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(proyectoId: string, asesorId: string, calificacion: number, comentarios?: string): Promise<Evaluacion>;
    findAll(): Promise<Evaluacion[]>;
    findOne(id: string): Promise<Evaluacion | null>;
    update(id: string, updateData: Partial<Evaluacion>): Promise<Evaluacion>;
    remove(id: string): Promise<void>;
}
export declare class EvaluacionModule {
}
