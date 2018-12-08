import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePanelMemberRequestComponent } from './change-panel-member-request.component';

describe('ChangePanelMemberRequestComponent', () => {
  let component: ChangePanelMemberRequestComponent;
  let fixture: ComponentFixture<ChangePanelMemberRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePanelMemberRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePanelMemberRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
