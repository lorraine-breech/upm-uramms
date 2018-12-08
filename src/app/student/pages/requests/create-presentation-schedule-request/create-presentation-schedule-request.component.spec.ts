import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePresentationScheduleRequestComponent } from './create-presentation-schedule-request.component';

describe('CreatePresentationScheduleRequestComponent', () => {
  let component: CreatePresentationScheduleRequestComponent;
  let fixture: ComponentFixture<CreatePresentationScheduleRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePresentationScheduleRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePresentationScheduleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
