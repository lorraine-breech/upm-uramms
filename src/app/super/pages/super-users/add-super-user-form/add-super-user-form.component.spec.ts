import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperUserFormComponent } from './add-super-user-form.component';

describe('AddSuperUserFormComponent', () => {
  let component: AddSuperUserFormComponent;
  let fixture: ComponentFixture<AddSuperUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSuperUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuperUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
