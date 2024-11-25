import { AdminService } from './admin.service';
import { User, Project } from '@prisma/client';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getAllUsers(): Promise<User[]>;
    updateUserRole(id: string, role: string): Promise<User>;
    deleteUser(id: string): Promise<void>;
    getAllProjects(): Promise<Project[]>;
    updateProjectStatus(id: string, status: string): Promise<Project>;
    deleteProject(id: string): Promise<void>;
}
