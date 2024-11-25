import { RolesGuard } from './roles.guard';

describe('RolesGuard', () => {
  it('should be defined', () => {
    const reflector = { get: jest.fn() } as any;
    expect(new RolesGuard(reflector)).toBeDefined();
  });
});
