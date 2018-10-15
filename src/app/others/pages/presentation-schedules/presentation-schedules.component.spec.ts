import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationSchedulesComponent } from './presentation-schedules.component';

describe('PresentationSchedulesComponent', () => {
  let component: PresentationSchedulesComponent;
  let fixture: ComponentFixture<PresentationSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
