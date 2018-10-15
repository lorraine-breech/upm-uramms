import { PanelMemberRoutingModule } from './panel-member-routing.module';

describe('PanelMemberRoutingModule', () => {
  let panelMemberRoutingModule: PanelMemberRoutingModule;

  beforeEach(() => {
    panelMemberRoutingModule = new PanelMemberRoutingModule();
  });

  it('should create an instance', () => {
    expect(panelMemberRoutingModule).toBeTruthy();
  });
});
