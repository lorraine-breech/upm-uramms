import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentUserService } from '../../../../shared/services/student-user.service';
import { Panel } from '../../../../shared/models/panel';
import { Course } from '../../../../shared/models/course';
import { Department } from '../../../../shared/models/department';
import { College } from '../../../../shared/models/college';
import { CourseService } from '../../../../shared/services/course.service';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {
  addStudentUserForm: FormGroup;
  submitted = false;

  private course: Course = null;
  private department: Department = null;
  private college: College = null;

  constructor(public router: Router, formBuilder: FormBuilder,
    private studentUserService: StudentUserService,
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
  }

  onSubmit(){
    this.submitted = true;

    /*let firstName = this.addStudentUserForm.value.firstName;
    let middleName = this.addStudentUserForm.value.middleName;
    let lastName =  this.addStudentUserForm.value.lastName;
    let studentNumber = this.addStudentUserForm.value.studentNumber;
    let year = this.addStudentUserForm.value.year;
    let course = this.addStudentUserForm.value.course;
    let adviser = this.addStudentUserForm.value.adviser;
    */

    let firstName = "Student";
    let middleName = "StudentM";
    let lastName =  "StudentL";
    let studentNumber = "12345";
    let year = "4";
    let course = "BSCS";
    let adviser = "Adviser";
    this.getCourse(course);

    let dept = this.department.getDeptName();
    let college = this.college.getColName();
    let panel = new Panel();
    let user_type = "student";
    let user_username = this.getDefaultUsername(firstName, lastName);
    let user_password = this.getDefaultPassword(firstName, lastName);
    let status = "proposal";

    this.studentUserService.addStudentUser(
      firstName,
      middleName,
      lastName,
      studentNumber,
      year,
      course,
      dept,
      college,
      panel,
      adviser,
      status,
      user_type,
      user_username,
      user_password
    ).subscribe(newStudentUser =>{
      if(newStudentUser){
        //successful
      }
      else{
        //unsuccessful
      }
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
        });
  }

  gotoStudentsList(){
    this.router.navigate(['/super/students']);
  }
}
