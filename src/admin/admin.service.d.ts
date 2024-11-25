import { PrismaService } from '../../prisma/prisma.service';
import { User, Project } from '@prisma/client';
export declare class AdminService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllUsers(): Promise<User[]>;
    updateUserRole(userId: string, role: string): Promise<User>;
    deleteUser(userId: string): Promise<void>;
    findAllProjects(): Promise<Project[]>;
    updateProjectStatus(projectId: string, status: string): Promise<Project>;
    deleteProject(projectId: string): Promise<void>;
}
