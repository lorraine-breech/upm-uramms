import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfessorFormComponent } from './add-professor-form.component';

describe('AddProfessorFormComponent', () => {
  let component: AddProfessorFormComponent;
  let fixture: ComponentFixture<AddProfessorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfessorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfessorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
