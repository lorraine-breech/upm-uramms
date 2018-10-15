import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMemberNavbarComponent } from './panel-member-navbar.component';

describe('PanelMemberNavbarComponent', () => {
  let component: PanelMemberNavbarComponent;
  let fixture: ComponentFixture<PanelMemberNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelMemberNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelMemberNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
