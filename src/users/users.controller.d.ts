import { UsersService } from './users.service';
import { User } from '@prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(username: string, password: string, fullName: string, email: string): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(username: string): Promise<User | null>;
    update(id: string, updateData: Partial<User>): Promise<User>;
    remove(id: string): Promise<void>;
}
