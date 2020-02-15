import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperApprovalComponent } from './paper-approval.component';

describe('PaperApprovalComponent', () => {
  let component: PaperApprovalComponent;
  let fixture: ComponentFixture<PaperApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
