import { Test, TestingModule } from '@nestjs/testing';
import { GtuvController } from './gtuv.controller';

describe('GtuvController', () => {
  let controller: GtuvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GtuvController],
    }).compile();

    controller = module.get<GtuvController>(GtuvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
