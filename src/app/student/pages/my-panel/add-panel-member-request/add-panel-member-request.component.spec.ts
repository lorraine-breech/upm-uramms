import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPanelMemberRequestComponent } from './add-panel-member-request.component';

describe('AddPanelMemberRequestComponent', () => {
  let component: AddPanelMemberRequestComponent;
  let fixture: ComponentFixture<AddPanelMemberRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPanelMemberRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPanelMemberRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
