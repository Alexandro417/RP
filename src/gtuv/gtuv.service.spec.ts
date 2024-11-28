import { Test, TestingModule } from '@nestjs/testing';
import { GtuvService } from './gtuv.service';

describe('GtuvService', () => {
  let service: GtuvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GtuvService],
    }).compile();

    service = module.get<GtuvService>(GtuvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
