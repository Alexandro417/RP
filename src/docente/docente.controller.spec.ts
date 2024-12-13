import { Test, TestingModule } from '@nestjs/testing';
import { DocenteController } from './docente.controller';
import { DocenteService } from './docente.service';

describe('DocenteController', () => {
  let controller: DocenteController;
  let service: DocenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocenteController],
      providers: [
        {
          provide: DocenteService,
          useValue: {
            hacerObservacion: jest.fn().mockResolvedValue({
              message: 'Observación registrada con éxito',
              etapa: {},
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<DocenteController>(DocenteController);
    service = module.get<DocenteService>(DocenteService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should make an observation', async () => {
    const result = await controller.makeObservation('123', '456', 'Observación de prueba');
    expect(result).toEqual({
      message: 'Observación registrada con éxito',
      etapa: {},
    });
    expect(service.hacerObservacion).toHaveBeenCalledWith('123', '456', 'Observación de prueba');
  });
});
