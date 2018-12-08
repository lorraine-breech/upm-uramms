import { SuperModule } from './super.module';

describe('SuperModule', () => {
  let superModule: SuperModule;

  beforeEach(() => {
    superModule = new SuperModule();
  });

  it('should create an instance', () => {
    expect(superModule).toBeTruthy();
  });
});
