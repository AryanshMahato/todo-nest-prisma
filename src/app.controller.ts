import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Todo, User } from '@prisma/client';
import { CreateTodo } from './Validation/todo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTodos(): Promise<{ todos: Todo[] }> {
    const todos = await this.appService.fetchAllTodos();
    return { todos };
  }

  @Get('user')
  async getUsers(): Promise<{ users: User[] }> {
    const users = await this.appService.getAllUser();

    if (users.length) return { users };

    //? No users found!
    throw new NotFoundException('No User found!');
  }

  @Get(':id')
  async getTodo(@Param('id') id: number): Promise<{ todo: Todo }> {
    const todo = await this.appService.fetchTodo(+id);
    return { todo };
  }

  @Post()
  async createTodo(@Body() createBody: CreateTodo): Promise<{ todo: Todo }> {
    const getUser = await this.appService.getUser(createBody.userId);

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

  @Patch('/done/:id')
  async todoDone(@Param('id') id: number): Promise<{ todo: Todo }> {
    const todo = await this.appService.todoDone(+id);
    return { todo };
  }
}
