import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from '@prisma/client';
import { CreateTodo } from './Validation/todo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTodo(): Promise<{ todos: Todo[] }> {
    const todos = await this.appService.fetchAllTodos();
    return { todos };
  }

  @Post()
  async createTodo(@Body() createBody: CreateTodo): Promise<{ todo: Todo }> {
    const todo = await this.appService.createTodo(
      createBody.todo,
      createBody.done,
    );

    return { todo };
  }
}
