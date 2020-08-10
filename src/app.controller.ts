import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from '@prisma/client';
import { CreateTodo } from './Validation/todo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTodos(): Promise<{ todos: Todo[] }> {
    const todos = await this.appService.fetchAllTodos();
    return { todos };
  }

  @Get(':id')
  async getTodo(@Param('id') id: number): Promise<{ todo: Todo }> {
    const todo = await this.appService.fetchTodo(+id);
    return { todo };
  }

  @Post()
  async createTodo(@Body() createBody: CreateTodo): Promise<{ todo: Todo }> {
    const todo = await this.appService.createTodo(
      createBody.todo,
      createBody.done,
    );

    return { todo };
  }

  @Patch(':id')
  async updateTodoTitle(
    @Param('id') id: number,
    @Body('todo') title: string,
  ): Promise<{ todo: Todo }> {
    const todo = await this.appService.updateTodoTitle(+id, title);
    return { todo };
  }
}
