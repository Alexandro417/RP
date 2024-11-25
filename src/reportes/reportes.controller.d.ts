import { ReportesService } from './reportes.service';
export declare class ReportesController {
    private readonly reportesService;
    constructor(reportesService: ReportesService);
    getReporteUsuarios(): Promise<{
        id: string;
        username: string;
        password: string;
        email: string;
        fullName: string;
        role: string;
    }[]>;
    getReporteProyectos(): Promise<{
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
