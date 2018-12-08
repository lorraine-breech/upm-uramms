import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }
 
  login(){
    this.router.navigate(['/panel-member/requests']);
  }


  /*
  login(){
    this.router.navigate(['/super/students']);
  }
  */

  /* 
  login(){
    this.router.navigate(['/student/requests/request-list']);
  }
  */
}
