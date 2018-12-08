import { SuperRoutingModule } from './super-routing.module';

describe('SuperRoutingModule', () => {
  let superRoutingModule: SuperRoutingModule;

  beforeEach(() => {
    superRoutingModule = new SuperRoutingModule();
  });

  it('should create an instance', () => {
    expect(superRoutingModule).toBeTruthy();
  });
});
