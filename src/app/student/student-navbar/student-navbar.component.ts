import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage(){
    this.message = ' Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  
  logout(){
    this.authService.logout();
    this.setMessage();
    //redirect the user back to login page
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
