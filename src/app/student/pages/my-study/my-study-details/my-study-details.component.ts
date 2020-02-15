import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentUser } from '../../../../shared/models/user-student';
import { StudentUserService } from '../../../../shared/services/student-user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudyService } from '../../../../shared/services/study.service';
import { Study } from '../../../../shared/models/study';

@Component({
  selector: 'app-my-study-details',
  templateUrl: './my-study-details.component.html',
  styleUrls: ['./my-study-details.component.css']
}) 
export class MyStudyDetailsComponent implements OnInit {
  
  loggedInStudentUser: StudentUser;
  myStudyDetailsForm: FormGroup;
  study: Study;

  constructor( 
    public router: Router,
    private studentUserService: StudentUserService,
    private formBuilder: FormBuilder,
    private studyService: StudyService
  ) { 
  }
 
  ngOnInit() { 
    this.loggedInStudentUser = new StudentUser(this.studentUserService.getLoggedInStudentUser());
    this.study = this.studentUserService.getLoggedInStudentUserStudy();
    console.warn(this.study.getStudyStatus());
  }


  changeProposalRequest(){
    this.router.navigate(['/student/my-study/change-proposal-request']);
  }
  isStudyExists(){
    this.loggedInStudentUser = new StudentUser(this.studentUserService.getLoggedInStudentUser());
    console.warn(this.loggedInStudentUser.getStudentUserFullName());
    if(this.loggedInStudentUser.getStudentUserStudyId()){ 
      //console.warn("Study ID: "+ this.loggedInStudentUser.getStudentUserStudyId());
      return true;
    }
    else{
      return false; 
    }  
  }
  isFreeToEdit(){
    if(this.study.getStudyStatus()=="Proposal Writing"){
    
      return true; 
    }
    else{
      return false;
    }
  }
  isManuscript(){
    if(this.study.getStudyStatus()=="Implementation" || this.study.getStudyStatus()=="Manus Writing" || this.study.getStudyStatus()=="Manus Approval" || this.study.getStudyStatus()=="Manus Approved" || this.study.getStudyStatus()=="Completed"){
      return true;
    }
    else return false;
  }
  editStudy(){
    this.router.navigate(['/student/my-study/edit-study']);
  }
  gotoAddStudy(){
    this.router.navigate(['/student/my-study/add-study']);
  }
  viewProposalFile(){

  }
  viewManuscriptFile(){

  }

}
