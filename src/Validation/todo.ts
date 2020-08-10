import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateTodo {
  @IsString()
  todo: string;

  @IsNumber()
  userId: number;

  @IsBoolean()
  done: boolean;
}
