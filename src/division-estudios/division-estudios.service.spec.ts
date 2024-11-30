import { Test, TestingModule } from '@nestjs/testing';
import { DivisionEstudiosService } from './division-estudios.service';

describe('DivisionEstudiosService', () => {
  let service: DivisionEstudiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DivisionEstudiosService],
    }).compile();

    service = module.get<DivisionEstudiosService>(DivisionEstudiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
