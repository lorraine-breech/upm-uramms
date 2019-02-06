import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentFormComponent } from './edit-student-form.component';

describe('EditStudentFormComponent', () => {
  let component: EditStudentFormComponent;
  let fixture: ComponentFixture<EditStudentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
