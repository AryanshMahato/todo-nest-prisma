import { Injectable } from '@nestjs/common';
import { PrismaService } from './Database/prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async fetchAllTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async fetchTodo(id: number): Promise<Todo> {
    return this.prisma.todo.findOne({ where: { id } });
  }

  async createTodo(title: string, done: boolean): Promise<Todo> {
    return await this.prisma.todo.create({ data: { title, done } });
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
