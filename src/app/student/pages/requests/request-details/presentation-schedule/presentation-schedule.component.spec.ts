import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationScheduleComponent } from './presentation-schedule.component';

describe('PresentationScheduleComponent', () => {
  let component: PresentationScheduleComponent;
  let fixture: ComponentFixture<PresentationScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
