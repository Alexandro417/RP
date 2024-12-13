import { Test, TestingModule } from '@nestjs/testing';
import { DocenteService } from './docente.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

describe('DocenteService', () => {
  let service: DocenteService;
  let etapaModel: Model<any>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DocenteService,
        {
          provide: getModelToken('Etapa'),
          useValue: {
            findById: jest.fn().mockImplementation(() => ({
              exec: jest.fn().mockResolvedValue({
                observaciones: [],
                save: jest.fn(),
              }),
            })),
          },
        },
      ],
    }).compile();

    service = module.get<DocenteService>(DocenteService);
    etapaModel = module.get<Model<any>>(getModelToken('Etapa'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should make an observation', async () => {
    const result = await service.hacerObservacion('123', '456', 'Observación de prueba');
    expect(result.message).toEqual('Observación registrada con éxito');
    expect(etapaModel.findById).toHaveBeenCalledWith('456');
  });
});
