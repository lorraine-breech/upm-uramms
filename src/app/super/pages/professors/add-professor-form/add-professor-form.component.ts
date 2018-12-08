import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-professor-form',
  templateUrl: './add-professor-form.component.html',
  styleUrls: ['./add-professor-form.component.css']
})
export class AddProfessorFormComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  gotoProfessorsList(){
    this.router.navigate(['/super/professors']);
  }

}
