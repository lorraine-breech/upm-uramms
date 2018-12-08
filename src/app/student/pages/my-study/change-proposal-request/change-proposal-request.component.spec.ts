import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProposalRequestComponent } from './change-proposal-request.component';

describe('ChangeProposalRequestComponent', () => {
  let component: ChangeProposalRequestComponent;
  let fixture: ComponentFixture<ChangeProposalRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeProposalRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeProposalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
