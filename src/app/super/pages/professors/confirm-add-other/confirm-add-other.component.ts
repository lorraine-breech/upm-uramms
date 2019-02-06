import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../../../../shared/services/professor.service';
import { OtherUserService } from '../../../../shared/services/other-user.service';
import { Professor } from '../../../../shared/models/professor';

@Component({
  selector: 'app-confirm-add-other',
  templateUrl: './confirm-add-other.component.html',
  styleUrls: ['./confirm-add-other.component.css']
})
export class ConfirmAddOtherComponent implements OnInit {
  private currentOtherType: string;
  private currentProfessor: Professor;

  constructor(
    private router: Router, 
    private professorService: ProfessorService, 
    private otherUserService: OtherUserService
  ) { }

  ngOnInit() {
    this.currentProfessor = this.professorService.getCurrentProfessor();
    this.currentOtherType =  this.professorService.getCurrentOtherType();
  }

  addOtherUser(){
    this.otherUserService.addOtherUser(
      this.currentProfessor.getProfessorId(),
      this.currentOtherType, // other_type
      null //other_is_panel_member
    ).subscribe(newProfessor=>{
      if(newProfessor){
        this.gotoProfessorsList();
      }
      else{

      }
    });
  }

  gotoProfessorsList(){
    this.router.navigate(['/super/professors']);
  }
}
