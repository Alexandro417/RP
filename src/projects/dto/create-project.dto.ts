// src/modules/projects/dto/create-project.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly description: string;
}
