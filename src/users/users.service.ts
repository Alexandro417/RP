import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Importar el servicio Prisma
import { User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Crear un nuevo usuario
  async create(username: string, password: string, fullName: string, email: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        fullName,
        email,
      },
    });
  }

  // Obtener un usuario por su nombre de usuario
  async findOne(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }

  // Obtener todos los usuarios
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Actualizar usuario
  async update(id: string, updateData: Partial<User>): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: updateData,
    });
  }

  // Eliminar un usuario
  async remove(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
