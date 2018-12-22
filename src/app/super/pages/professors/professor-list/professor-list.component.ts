import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Professor } from '../../../../shared/models/professor';
import { ProfessorService } from '../../../../shared/services/professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {
  
  private professors: Professor[];
  
  constructor(
    public router: Router, 
    private professorService: ProfessorService 
  ) { }

  ngOnInit() {
    this.getProfessorsUsers();
  }

  getProfessorsUsers(){
    this.professorService.getProfessors()
        .subscribe(res => this.professors = res );
  }
 
  goToAddProfessorForm(){
    this.router.navigate(['/super/professors/add-professor-form']);
  }
}
