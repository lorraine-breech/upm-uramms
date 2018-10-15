import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRequestComponent } from './approval-request.component';

describe('ApprovalRequestComponent', () => {
  let component: ApprovalRequestComponent;
  let fixture: ComponentFixture<ApprovalRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
