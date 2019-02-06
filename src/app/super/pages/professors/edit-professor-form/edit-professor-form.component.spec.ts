import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfessorFormComponent } from './edit-professor-form.component';

describe('EditProfessorFormComponent', () => {
  let component: EditProfessorFormComponent;
  let fixture: ComponentFixture<EditProfessorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfessorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfessorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
