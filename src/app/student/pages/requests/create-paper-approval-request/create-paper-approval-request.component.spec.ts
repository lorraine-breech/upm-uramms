import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaperApprovalRequestComponent } from './create-paper-approval-request.component';

describe('CreatePaperApprovalRequestComponent', () => {
  let component: CreatePaperApprovalRequestComponent;
  let fixture: ComponentFixture<CreatePaperApprovalRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePaperApprovalRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaperApprovalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
