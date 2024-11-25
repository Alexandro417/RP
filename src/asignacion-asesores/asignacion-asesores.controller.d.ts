import { AsignacionAsesoresService } from './asignacion-asesores.service';
export declare class AsignacionAsesoresController {
    private readonly asignacionAsesoresService;
    constructor(asignacionAsesoresService: AsignacionAsesoresService);
    asignarAsesor(asesorId: string, usuarioId: string, proyectoId: string): Promise<{
        id: string;
        asesorId: string;
        usuarioId: string;
        proyectoId: string;
    }>;
}
