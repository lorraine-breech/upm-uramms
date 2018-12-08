import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangePanelMemberComponent } from './add-change-panel-member.component';

describe('AddChangePanelMemberComponent', () => {
  let component: AddChangePanelMemberComponent;
  let fixture: ComponentFixture<AddChangePanelMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChangePanelMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChangePanelMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
