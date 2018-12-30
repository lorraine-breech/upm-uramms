import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentUser } from '../../../../shared/models/user-student';
import { StudentUserService } from '../../../../shared/services/student-user.service';
import { UserService } from '../../../../shared/services/user.service';
import { User } from '../../../../shared/models/user';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  private studentUsers: StudentUser[];
  private users: User[] = [];
  private user: User;
  private corrPassword: string=""; 
  constructor(
    public router: Router, 
    private studentUserService: StudentUserService,
    private userService: UserService 
  ){}
  
  ngOnInit() {
    this.getStudentUsers();
  }

  getStudentUsers(){
    this.studentUserService.getStudentUsers()
        .subscribe(res => {
          console.warn(res); 
          this.studentUsers = res.map(user => new StudentUser(user));
          for(let studentUser of this.studentUsers){
            this.getUser(studentUser.getStudentUserId());
          }
        });
  }

  getUser(user_type_id: string){
    this.userService.getUser(user_type_id)
        .subscribe(res => {
          console.warn(res); 
          this.user = new User(res);
          this.users.push(this.user);
        } );
  }

  getUsername(studentUserId: String){
    this.corrPassword="";
    for(let user of this.users){
      if(user.getUserTypeId() === studentUserId) {
        //console.log(user.getUserTypeId());
        this.corrPassword = user.getUserPassword();
        return user.getUserUsername();
      }
    }
  }

  getPassword(){
    return this.corrPassword;
  }

  getCourseName(courseID: string){
    //service function
  }

  goToAddStudentForm(){
    this.router.navigate(['/super/students/add-student-form']);
  }
}
