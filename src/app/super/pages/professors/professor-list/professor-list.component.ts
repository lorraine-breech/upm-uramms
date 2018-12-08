import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  constructor(public router: Router ) { }

  ngOnInit() {
  }

  goToAddProfessorForm(){
    this.router.navigate(['/super/professors/add-professor-form']);
  }
}
