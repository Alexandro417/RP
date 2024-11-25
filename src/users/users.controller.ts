import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('fullName') fullName: string,
    @Body('email') email: string,
  ): Promise<User> {
    return this.usersService.create(username, password, fullName, email);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':username')
  async findOne(@Param('username') username: string): Promise<User | null> {
    return this.usersService.findOne(username);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateData: Partial<User>): Promise<User> {
    return this.usersService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
