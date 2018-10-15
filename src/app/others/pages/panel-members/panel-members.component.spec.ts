import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMembersComponent } from './panel-members.component';

describe('PanelMembersComponent', () => {
  let component: PanelMembersComponent;
  let fixture: ComponentFixture<PanelMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
