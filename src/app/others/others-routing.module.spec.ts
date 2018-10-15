import { OthersRoutingModule } from './others-routing.module';

describe('OthersRoutingModule', () => {
  let othersRoutingModule: OthersRoutingModule;

  beforeEach(() => {
    othersRoutingModule = new OthersRoutingModule();
  });

  it('should create an instance', () => {
    expect(othersRoutingModule).toBeTruthy();
  });
});
