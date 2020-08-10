import { Injectable } from '@nestjs/common';
import { PrismaService } from './Database/prisma.service';
import { Todo, User } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async fetchAllTodos(): Promise<Todo[]> {
    const todos = await this.prisma.todo.findMany();
    console.log(todos);
    return todos;
  }

  async fetchTodo(id: number): Promise<Todo> {
    return this.prisma.todo.findOne({ where: { id } });
  }

  async createTodo(title: string, done: boolean): Promise<Todo> {
    return await this.prisma.todo.create({ data: { title, done } });
  }

  async createUser(name: string): Promise<User> {
    return await this.prisma.user.create({ data: { name } });
  }

  async getUser(id: number): Promise<User> {
    return await this.prisma.user.findOne({ where: { id } });
  }

  async getAllUser(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async updateTodoTitle(id: number, todo: string): Promise<Todo> {
    return await this.prisma.todo.update({
      where: { id },
      data: { title: todo },
    });
  }

  async todoDone(id: number): Promise<Todo> {
    return await this.prisma.todo.update({
      where: { id },
      data: { done: true },
    });
  }
}
