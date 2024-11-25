import { PrismaService } from '/Users/arman/residencias/prisma/prisma.service';
import { Project } from '@prisma/client';
export declare class ProjectsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, title: string, description: string, pdfUrl?: string): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project | null>;
    update(id: string, updateData: Partial<Project>): Promise<Project>;
    remove(id: string): Promise<void>;
}
