import { PanelMemberModule } from './panel-member.module';

describe('PanelMemberModule', () => {
  let panelMemberModule: PanelMemberModule;

  beforeEach(() => {
    panelMemberModule = new PanelMemberModule();
  });

  it('should create an instance', () => {
    expect(panelMemberModule).toBeTruthy();
  });
});
