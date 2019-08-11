import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../../../../shared/services/professor.service';
import { Professor } from '../../../../shared/models/professor';
import { Router } from '@angular/router';
import { PanelMemberUserService } from '../../../../shared/services/panel-member-user.service';

@Component({
  selector: 'app-confirm-add-pm',
  templateUrl: './confirm-add-pm.component.html',
  styleUrls: ['./confirm-add-pm.component.css']
})
export class ConfirmAddPmComponent implements OnInit {
  currentProfessor: Professor = null;
  constructor(
    private router: Router, 
    private professorService: ProfessorService, 
    private panelMemberUserService: PanelMemberUserService 
  ) { }

  ngOnInit() {
    this.currentProfessor = this.professorService.getCurrentProfessor();
  }
  
  addPanelMemberUser(){
    this.panelMemberUserService.addPanelMemberUser(
      this.currentProfessor.getProfessorId(),
      this.currentProfessor.getProfessorFullName()
    ).subscribe(newProfessor=>{
      if(newProfessor){
        //successful
        //clearForm()
        console.warn("Success!");
        this.gotoProfessorsList();
      }
      else{
        //unsuccessful
      }
    });
  }
  gotoProfessorsList(){
    this.router.navigate(['/super/professors']);
  }

}
