import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentUserService } from '../../../../shared/services/student-user.service';
import { Panel } from '../../../../shared/models/panel';
import { Course } from '../../../../shared/models/course';
import { Department } from '../../../../shared/models/department';
import { College } from '../../../../shared/models/college';
import { CourseService } from '../../../../shared/services/course.service';
import { Professor } from '../../../../shared/models/professor';
import { ProfessorService } from '../../../../shared/services/professor.service';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {
  addStudentUserForm: FormGroup;
  submitted = false;
  private courses: Course[] = null;
  private professorPanelMemberUsers: Professor[];
  private professorPanelMemberUser: Professor = null;
  private course: Course = null;
  private department: Department = null;
  private college: College = null;

  private firstName: string = null;
  private middleName: string = null;
  private lastName: string = null;
  private studentNumber: string = null;
  private year: string = null;
  private courseForm: string = null;
  private adviser: string = null;
  
  private panel = new Panel();
  private user_type: string = null;
  private user_username: string = null;
  private user_password: string = null;
  private status: string = null;
  
  constructor(
    public router: Router, 
    formBuilder: FormBuilder,
    private studentUserService: StudentUserService,
    private professorService: ProfessorService,
    private courseService: CourseService 
  ) { 
    this.addStudentUserForm = formBuilder.group({
      firstName: null,
      middleName: null,
      lastName: null,
      studentNumber: null,
      year: null,
      course: null,
      adviser: null  
    });
  }
  

  ngOnInit() {
    this.getProfessorPanelMemberUsers();
    this.getCourses();
  }

  getProfessorPanelMemberUsers(){
    this.professorService.getProfessorPanelMemberUsers()
      .subscribe( res=>{
        console.warn(res); 
        this.professorPanelMemberUsers = res.map(user => new Professor(user)); 
      });
  }
  onSubmit(){
    this.submitted = true;

    this.firstName = this.addStudentUserForm.value.firstName;
    this.middleName = this.addStudentUserForm.value.middleName;
    this.lastName =  this.addStudentUserForm.value.lastName;
    this.studentNumber = this.addStudentUserForm.value.studentNumber;
    this.year = this.addStudentUserForm.value.year;
    this.courseForm = this.addStudentUserForm.value.course;
    this.adviser = this.addStudentUserForm.value.adviser;

    this.panel = new Panel();
    this.user_type = "student";
    this.user_username = this.getDefaultUsername(this.firstName, this.lastName);
    this.user_password = this.getDefaultPassword(this.firstName, this.lastName);
    this.status = "proposal";
    this.getCourse(this.courseForm);
  }

  getCourses(){
    this.courseService.getCourses()
      .subscribe(res=>{
        console.warn(res); 
        this.courses = res.map(course => new Course(course)); 
      })
  }
  getDefaultUsername(fname:string, lname:string){
    return fname + lname;
  }
  getDefaultPassword(fname:string, lname:string){
    return fname + lname;
  }
  getCourse(courseName: string){
    this.courseService.getCourse(courseName)
        .subscribe(res =>{
          console.warn(res); 
          this.course = new Course(res);
          console.warn("DeptID: " + this.course.getCourseDeptId());
          this.getDepartment(this.course.getCourseDeptId());
        });
  }

  getDepartment(deptId: string){
    this.courseService.getDepartment(deptId)
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
          this.addStudentUser();
        });

  }

  addStudentUser(){
    this.studentUserService.addStudentUser(
      this.firstName,
      this.middleName,
      this.lastName,
      this.studentNumber,
      this.year,
      this.courseForm,
      this.department.getDeptName(),
      this.college.getColName(),
      this.panel,
      this.adviser,
      this.status,
      this.user_type,
      this.user_username,
      this.user_password
    ).subscribe(newStudentUser =>{
      if(newStudentUser){
        //successful
        //clearForm()
        this.gotoStudentsList();
      }
      else{
        //unsuccessful
      }
    });
  }
  gotoStudentsList(){
    this.router.navigate(['/super/students']);
  }
}
