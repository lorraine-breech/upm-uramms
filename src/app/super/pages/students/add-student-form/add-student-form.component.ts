import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {

  constructor(public router: Router ) { }

  ngOnInit() {
  }

  gotoStudentsList(){
    this.router.navigate(['/super/students']);
  }
}
