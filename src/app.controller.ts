import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTodo(): Promise<{ todos: Todo[] }> {
    const todos = await this.appService.fetchAllTodos();
    return { todos };
  }
}
