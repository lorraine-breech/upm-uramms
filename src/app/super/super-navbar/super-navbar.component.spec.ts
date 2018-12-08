import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperNavbarComponent } from './super-navbar.component';

describe('SuperNavbarComponent', () => {
  let component: SuperNavbarComponent;
  let fixture: ComponentFixture<SuperNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
