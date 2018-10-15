import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersNavbarComponent } from './others-navbar.component';

describe('OthersNavbarComponent', () => {
  let component: OthersNavbarComponent;
  let fixture: ComponentFixture<OthersNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
