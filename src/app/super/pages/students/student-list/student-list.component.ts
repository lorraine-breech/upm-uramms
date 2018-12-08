import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  users: Object;

  constructor(private _userService: UserService, public router: Router) { 
    this._userService.getUsers()
        .subscribe(res => this.users = res);
  }

  ngOnInit() {
  }

  goToAddStudentForm(){
    this.router.navigate(['/super/students/add-student-form']);
  }
}
