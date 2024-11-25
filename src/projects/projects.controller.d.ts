import { ProjectsService } from './projects.service';
import { Project } from '@prisma/client';
import { GoogleCloudStorageService } from '../google-cloud-storage/google-cloud-storage.service';
export declare class ProjectsController {
    private readonly projectsService;
    private readonly gcsService;
    constructor(projectsService: ProjectsService, gcsService: GoogleCloudStorageService);
    create(userId: string, title: string, description: string, pdfUrl?: string): Promise<Project>;
    uploadPdf(file: Express.Multer.File): Promise<{
        message: string;
        fileUrl: string;
    }>;
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project | null>;
    update(id: string, updateData: Partial<Project>): Promise<Project>;
    remove(id: string): Promise<void>;
}
