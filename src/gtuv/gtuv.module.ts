import { Module } from '@nestjs/common';
import { GtuvController } from './gtuv.controller';
import { GtuvService } from './gtuv.service';

@Module({
  controllers: [GtuvController],
  providers: [GtuvService]
})
export class GtuvModule {}
