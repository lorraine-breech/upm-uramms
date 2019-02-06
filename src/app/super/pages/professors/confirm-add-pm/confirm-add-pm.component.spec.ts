import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAddPmComponent } from './confirm-add-pm.component';

describe('ConfirmAddPmComponent', () => {
  let component: ConfirmAddPmComponent;
  let fixture: ComponentFixture<ConfirmAddPmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAddPmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAddPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
