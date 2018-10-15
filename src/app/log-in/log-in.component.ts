import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage(){
    this.message = ' Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(){
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(()=> {
      this.setMessage();
      if (this.authService.isLoggedIn){
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/student/requests/request-list';

        //rediirect the user
        this.router.navigate([redirect]);
      }
    });
  }
  /*
  logout(){
    this.authService.logout();
    this.setMessage();
  }
  */
  ngOnInit() {
  }

}
