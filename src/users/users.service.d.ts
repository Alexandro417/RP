import { PrismaService } from '/Users/arman/residencias/prisma/prisma.service';
import { User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(username: string, password: string, fullName: string, email: string): Promise<User>;
    findOne(username: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    update(id: string, updateData: Partial<User>): Promise<User>;
    remove(id: string): Promise<void>;
}
