import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentUserService } from 'src/app/shared/services/student-user.service';
import { Professor } from 'src/app/shared/models/professor';
import { ProfessorService } from 'src/app/shared/services/professor.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { StudentUser } from 'src/app/shared/models/user-student';
import { Panel } from 'src/app/shared/models/panel';
import { PanelMemberUser } from 'src/app/shared/models/user-panel-member';

@Component({
  selector: 'app-change-panel-member-request',
  templateUrl: './change-panel-member-request.component.html',
  styleUrls: ['./change-panel-member-request.component.css']
}) 
export class ChangePanelMemberRequestComponent implements OnInit {
  changePMRequestForm: FormGroup;
  submitted = false;
  private loggedInStudentUser: StudentUser;
  private professorPanelMemberUsers: Professor[];

  constructor( 
    public router: Router,
    private studentUserService: StudentUserService,
    private formBuilder: FormBuilder,
    private professorService: ProfessorService,
    private requestService: RequestService
    ) { 
      this.changePMRequestForm = formBuilder.group({
        role: null,
        currentPanelMember: null,
        newPanelMember: null,
        semester: null,
        academicYear: null,
        reason: null
      });
    }
 
  ngOnInit() {
    this.getProfessorPanelMemberUsers();
    let currentPM: PanelMemberUser;
    currentPM = new PanelMemberUser(this.requestService.getCurrentPMToChange());
    console.log("Current Panel Member: "+ currentPM.getPanelMemberUserFullName());
    this.loggedInStudentUser = new StudentUser(this.studentUserService.getLoggedInStudentUser());
    this.changePMRequestForm.setValue({
      role: this.requestService.getCurrentRole(),
      currentPanelMember: currentPM.getPanelMemberUserFullName(), 
      newPanelMember: null,
      semester: null,
      academicYear: null,
      reason: null
    });
  }
  onSubmit(){
    this.submitted = true;
    if(this.changePMRequestForm.value.newPanelMember && this.changePMRequestForm.value.semester && this.changePMRequestForm.value.academicYear && this.changePMRequestForm.value.reason){
      this.createChangePanelMemberRequest();
    }
    else{
      alert('Make sure all the fields are filled.');
    }
  } 
  createChangePanelMemberRequest(){
    let newPanelMember: PanelMemberUser;
    newPanelMember = new PanelMemberUser(this.changePMRequestForm.value.newPanelMember);
    this.requestService.addACRequest(
      "change",
      this.loggedInStudentUser.getStudentUserId(),
      this.requestService.getCurrentRole(),
      this.changePMRequestForm.value.reason,
      this.requestService.getCurrentPMToChange().getPanelMemberUserId(), 
      newPanelMember.getPanelMemberUserId(),
      [],
      new Date(),
      null //boolean is_approved
    ).subscribe((newACRequest)=>{
      if(newACRequest){
        //successful
        //clearForm()
        alert('Request Successfully Created.');
        this.goToRequestList();
      }
      else{
        alert('Creating Request Unsuccessful! ');
      }
    });
  }
  getProfessorPanelMemberUsers(){
    this.professorService.getProfessorPanelMemberUsers()
      .subscribe( res=>{
        console.warn(res); 
        this.professorPanelMemberUsers = res.map(user => new Professor(user)); 
      });
  }
  compareFn(c1: Professor, c2: Professor): boolean {
    return c1 && c2 ? c1.getProfessorId() === c2.getProfessorId() : c1 === c2;
  }
  goToMyPanelList(){
    this.router.navigate(['/student/my-panel']);
  }
  goToRequestList(){
    this.router.navigate(['/student/requests']);
  }

}
 