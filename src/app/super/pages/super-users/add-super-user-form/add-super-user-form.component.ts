import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-super-user-form',
  templateUrl: './add-super-user-form.component.html',
  styleUrls: ['./add-super-user-form.component.css']
})
export class AddSuperUserFormComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  gotoSupersList(){
    this.router.navigate(['/super/super-users']);
  }

}
