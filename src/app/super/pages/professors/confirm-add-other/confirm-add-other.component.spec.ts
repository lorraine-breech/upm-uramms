import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAddOtherComponent } from './confirm-add-other.component';

describe('ConfirmAddOtherComponent', () => {
  let component: ConfirmAddOtherComponent;
  let fixture: ComponentFixture<ConfirmAddOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAddOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAddOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
