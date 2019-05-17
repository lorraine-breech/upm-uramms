import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Department } from '../../../../shared/models/department';
import { College } from '../../../../shared/models/college';
import { ProfessorService } from '../../../../shared/services/professor.service';
import { CourseService } from '../../../../shared/services/course.service';

@Component({
  selector: 'app-add-professor-form',
  templateUrl: './add-professor-form.component.html',
  styleUrls: ['./add-professor-form.component.css']
})
export class AddProfessorFormComponent implements OnInit {
  addProfessorForm: FormGroup;
  submitted = false;
  private departments: Department[];
  private department: Department = null;
  private college: College = null;
  private firstName: string = null;
  private middleName: string = null;
  private lastName: string = null;
  private employeeNumber: string = null;
  private position: string = null;
  private title: string = null;
  private deptForm: string = null;
  private is_other_user: string = null;
  private other_user_type: string = null;
  private is_pm_user: string = null;

  private user_type: string = null;
  private user_username: string = null;
  private user_password: string = null;
  constructor( public router: Router, private formBuilder: FormBuilder,
    private professorService: ProfessorService,
    private courseService: CourseService
  ) { 
    this.addProfessorForm = formBuilder.group({
      firstName: null,
      middleName: null,
      lastName: null,
      employeeNumber: null,
      position: null,
      title: null,
      dept: null
    });
  }

  ngOnInit() {
    this.getDepartments();
  }

  onSubmit(){ 
    this.submitted = true;

    this.firstName = this.addProfessorForm.value.firstName;
    this.middleName = this.addProfessorForm.value.middleName;
    this.lastName =  this.addProfessorForm.value.lastName;
    this.employeeNumber = this.addProfessorForm.value.employeeNumber;
    this.position = this.addProfessorForm.value.position;
    this.title = this.addProfessorForm.value.title;
    this.deptForm = this.addProfessorForm.value.dept;
    
    this.user_type = "professor";
    this.user_username = this.getDefaultUsername(this.firstName, this.lastName);
    this.user_password = this.getDefaultPassword(this.firstName, this.lastName);
    this.getDeptbyName(this.deptForm);
    
  }
  getDefaultUsername(fname:string, lname:string){
    return fname + lname;
  }
  getDefaultPassword(fname:string, lname:string){
    return fname + lname;
  }
  
  getDeptbyName(deptName:string){
    this.courseService.getDepartmentByName(deptName)
        .subscribe(res =>{
          console.warn(res); 
          this.department = new Department(res);
          console.warn("DeptObjID: "+ this.department.getDeptId());
          console.warn("DeptName: "+ this.department.getDeptName());
          console.warn("Col_id: "+ this.department.getDeptColId());
          this.getCollege(this.department.getDeptColId());
        });
  }

  getCollege(colId: string){
    this.courseService.getCollege(colId)
        .subscribe(res =>{
          console.warn(res); 
          this.college = new College(res);
          console.warn("Col_name: "+ this.college.getColName());
          
          this.professorService.addProfessor(
            this.firstName,
            this.middleName,
            this.lastName,
            this.employeeNumber,
            this.position,
            this.title,
            this.department.getDeptName(),
            this.college.getColName(),
            this.is_other_user,
            this.other_user_type,
            this.is_pm_user,
            this.user_type,
            this.user_username,
            this.user_password
          ).subscribe(newProfessor=>{
            if(newProfessor){
              //successful
              //clearForm()
              this.gotoProfessorsList();
            }
            else{
              //unsuccessful
            }
          });
        });

  }
  gotoProfessorsList(){
    this.router.navigate(['/super/professors']);
  }
  getDepartments(){
    this.courseService.getDepartments()
      .subscribe(res=>{
        this.departments = res.map(department => new Department(department));
      });
  }

}
