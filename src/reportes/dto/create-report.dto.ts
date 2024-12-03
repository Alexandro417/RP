// src/modules/reports/dto/create-report.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateReportDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly type: string;
}
