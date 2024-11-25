import { PrismaService } from '../../prisma/prisma.service';
export declare class ReportesService {
    private prisma;
    constructor(prisma: PrismaService);
    generarReporteUsuarios(): Promise<{
        id: string;
        username: string;
        password: string;
        email: string;
        fullName: string;
        role: string;
    }[]>;
    generarReporteProyectos(): Promise<{
        id: string;
        title: string;
        description: string;
        status: string;
        pdfUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }[]>;
}
