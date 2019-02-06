import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperUserService } from '../../../../shared/services/super-user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Department } from '../../../../shared/models/department';
import { College } from '../../../../shared/models/college';
import { CourseService } from '../../../../shared/services/course.service';

@Component({
  selector: 'app-add-super-user-form',
  templateUrl: './add-super-user-form.component.html',
  styleUrls: ['./add-super-user-form.component.css']
})
export class AddSuperUserFormComponent implements OnInit {
  addSuperUserForm: FormGroup;
  submitted = false; 

  private department: Department = null;
  private college: College = null;
  private firstName: string = null;
  private middleName: string = null;
  private lastName: string = null;
  private employeeNumber: string = null;
  private position: string = null;
  private title: string = null;
  private deptForm: string = null;

  private user_type: string = null;
  private user_username: string = null;
  private user_password: string = null;

  constructor( 
    public router: Router,
    private formBuilder: FormBuilder, 
    private superUserService: SuperUserService,
    private courseService: CourseService 
  ) { 
    this.addSuperUserForm = formBuilder.group({
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
  }
  onSubmit(){
    this.submitted = true;

    this.firstName = this.addSuperUserForm.value.firstName;
    this.middleName = this.addSuperUserForm.value.middleName;
    this.lastName =  this.addSuperUserForm.value.lastName;
    this.employeeNumber = this.addSuperUserForm.value.employeeNumber;
    this.position = this.addSuperUserForm.value.position;
    this.title = this.addSuperUserForm.value.title;
    this.deptForm = this.addSuperUserForm.value.dept;
    
    this.user_type = "super";
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
          
          this.superUserService.addSuperUser(
            this.firstName,
            this.middleName,
            this.lastName,
            this.employeeNumber,
            this.position,
            this.title,
            this.department.getDeptName(),
            this.college.getColName(),
            this.user_type,
            this.user_username,
            this.user_password
          ).subscribe(newSuperUser =>{
            if(newSuperUser){
              //successful
              //clearForm()
              this.gotoSupersList();
            }
            else{
              //unsuccessful
            }
          });
        });

  }

  gotoSupersList(){
    this.router.navigate(['/super/super-users']);
  }

}
