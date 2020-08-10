import { IsBoolean, IsString } from 'class-validator';

export class CreateTodo {
  @IsString()
  todo: string;

  @IsBoolean()
  done: boolean;
}
