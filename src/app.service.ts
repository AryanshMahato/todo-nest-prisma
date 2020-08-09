import { Injectable } from '@nestjs/common';
import { PrismaService } from './Database/prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async fetchAllTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }
}
