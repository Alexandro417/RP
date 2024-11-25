import { PrismaService } from '../../prisma/prisma.service';
export declare class AsignacionAsesoresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    asignarAsesor(asesorId: string, usuarioId: string, proyectoId: string): Promise<{
        id: string;
        asesorId: string;
        usuarioId: string;
        proyectoId: string;
    }>;
}
