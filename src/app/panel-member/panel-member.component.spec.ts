import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMemberComponent } from './panel-member.component';

describe('PanelMemberComponent', () => {
  let component: PanelMemberComponent;
  let fixture: ComponentFixture<PanelMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
