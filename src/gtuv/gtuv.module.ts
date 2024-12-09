import { Module } from '@nestjs/common';
import { GTUVController } from './gtuv.controller';
import { GTUVService } from './gtuv.service';

@Module({
  controllers: [GTUVController],
  providers: [GTUVService]
})
export class GtuvModule {}
