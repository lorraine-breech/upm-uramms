import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProposalComponent } from './change-proposal.component';

describe('ChangeProposalComponent', () => {
  let component: ChangeProposalComponent;
  let fixture: ComponentFixture<ChangeProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
