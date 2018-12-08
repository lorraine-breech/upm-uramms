import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperComponent } from './super.component';

describe('SuperComponent', () => {
  let component: SuperComponent;
  let fixture: ComponentFixture<SuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
