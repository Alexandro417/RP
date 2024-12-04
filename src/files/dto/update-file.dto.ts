// src/modules/files/dto/update-file.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateFileDto } from './create-file.dto';

export class UpdateFileDto extends PartialType(CreateFileDto) {}
