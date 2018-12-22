import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../shared/services/user.service';

import { StudentUser } from '../../../../shared/models/user-student';
import { StudentUserService } from '../../../../shared/services/student-user.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  users: Object;
  private studentUsers: StudentUser[];

  constructor(
    public router: Router, 
    private studentUserService: StudentUserService 
  ){}
  
  ngOnInit() {
    this.getStudentUsers();
  }

  getStudentUsers(){
    this.studentUserService.getStudentUsers()
        .subscribe(res => {
          console.warn(res); 
          this.studentUsers = res; 
        } );
    
  }


  getCourseName(courseID: string){
    //service function
  }

  goToAddStudentForm(){
    this.router.navigate(['/super/students/add-student-form']);
  }
}
