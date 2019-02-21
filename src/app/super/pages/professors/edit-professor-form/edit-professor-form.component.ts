import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Professor } from '../../../../shared/models/professor';
import { Route, Router } from '@angular/router';
import { StudentUserService } from '../../../../shared/services/student-user.service';
import { ProfessorService } from '../../../../shared/services/professor.service';
import { Department } from '../../../../shared/models/department';
import { CourseService } from '../../../../shared/services/course.service';
import { College } from '../../../../shared/models/college';

@Component({
  selector: 'app-edit-professor-form',
  templateUrl: './edit-professor-form.component.html',
  styleUrls: ['./edit-professor-form.component.css']
})
export class EditProfessorFormComponent implements OnInit {

  editProfessorForm: FormGroup;
  submitted = false;
  private currentProfessor : Professor;
  private updatedProfessor: Professor;

  private departments: Department[];
  private college: College = null;
  private department: Department = null;


  constructor(
    public router: Router, 
    private formBuilder: FormBuilder,
    private studentUserService: StudentUserService,
    private professorService: ProfessorService,
    private courseService: CourseService
  ) {
    this.editProfessorForm = formBuilder.group({
      firstName: null,
      middleName: null,
      lastName: null,
      employeeNumber: null,
      position: null,
      title: null,
      department: null  
    });
  }

  ngOnInit() {
    this.currentProfessor = this.professorService.getCurrentProfessor();
    this.getDepartments();
  }

  onSubmit(){
    this.submitted = true;
    this.updatedProfessor = new Professor(this.currentProfessor);
    this.department = new Department(this.editProfessorForm.value.department);

    if(this.editProfessorForm.value.firstName !== this.currentProfessor.getProfessorFname()){
      this.updatedProfessor.setProfessorFname(this.editProfessorForm.value.firstName);
    }
    if(this.editProfessorForm.value.middleName !== this.currentProfessor.getProfessorMname()){
      this.updatedProfessor.setProfessorMname(this.editProfessorForm.value.middleName);
    }
    if(this.editProfessorForm.value.lastName !== this.currentProfessor.getProfessorLname()){
      this.updatedProfessor.setProfessorLname(this.editProfessorForm.value.lastName);
    }
    if(this.editProfessorForm.value.employeeNumber !== this.currentProfessor.getProfessorEmpNum()){
      this.updatedProfessor.setProfessorEmpNum(this.editProfessorForm.value.employeeNumber);
    }
    if(this.editProfessorForm.value.position !== this.currentProfessor.getProfessorPosition()){
      this.updatedProfessor.setProfessorPosition(this.editProfessorForm.value.position);
    }
    if(this.editProfessorForm.value.title !== this.currentProfessor.getProfessorTitle()){
      this.updatedProfessor.setProfessorTitle(this.editProfessorForm.value.title);
    }
    if(this.department.getDeptName() !== this.currentProfessor.getProfessorDepartment()){
      //change department and college
      this.updateDeptColProfessor();
    }
    else{
      this.updateProfessor();
    }
    
  }

  updateDeptColProfessor(){
    //calls setUpdatedDeptCol inside getCollege
    this.getCollege(this.department.getDeptColId());
  }
  getCollege(colId: string){
    this.courseService.getCollege(colId)
        .subscribe(res =>{
          this.college = new College(res);
          this.setUpdatedDeptCol();
          this.updateProfessor();
        });
  }
  updateProfessor(){
    this.professorService.updateStudentUser(this.updatedProfessor)
      .subscribe(()=>this.gotoProfessorsList());
  }
  setUpdatedDeptCol(){
    this.updatedProfessor.setProfessorDepartment(this.department.getDeptName());
    this.updatedProfessor.setProfessorCollege(this.college.getColName());
  }
  getDepartments(){
    this.courseService.getDepartments()
      .subscribe(res=>{
        this.departments = res.map(department => new Department(department));
        this.setEditProfessorForm();
      });
  }
  compareFn(c1: Department, c2: Department): boolean {
    return c1 && c2 ? c1.getDeptId() === c2.getDeptId() : c1 === c2;
  }
  setEditProfessorForm(){
    let currentDepartment: Department;
    for(let department of this.departments){
      if(department.getDeptName()==this.currentProfessor.getProfessorDepartment()){
        currentDepartment = new Department(department);
        break;
      }
    }
    this.editProfessorForm.setValue({
      firstName: this.currentProfessor.getProfessorFname(),
      middleName: this.currentProfessor.getProfessorMname(),
      lastName: this.currentProfessor.getProfessorLname(),
      employeeNumber: this.currentProfessor.getProfessorEmpNum(),
      position: this.currentProfessor.getProfessorPosition(),
      title: this.currentProfessor.getProfessorTitle(),
      department: currentDepartment
    });
  }
  gotoProfessorsList(){
    this.router.navigate(['/super/professors']);
  }

}
