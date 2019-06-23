import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StudentUserService } from 'src/app/shared/services/student-user.service';
import { Study } from 'src/app/shared/models/study';

@Component({
  selector: 'app-create-presentation-schedule-request',
  templateUrl: './create-presentation-schedule-request.component.html',
  styleUrls: ['./create-presentation-schedule-request.component.css']
})
export class CreatePresentationScheduleRequestComponent implements OnInit {
  createPSRequestForm: FormGroup;
  submitted = false;
  private study: Study;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private studentUserService: StudentUserService
  ){
    this.createPSRequestForm = formBuilder.group({
      title: null,
      abstract: null,
      studyFile: null,
      rstatus: null,
      date: null,
      timeTo: null, 
      timeFrom: null,
      place: null
    });
  }

  ngOnInit() {
    this.study = new Study(this.studentUserService.getLoggedInStudentUserStudy());
    let studyFile: string;
    let rstatus = this.study.getStudyStatus();
    if(rstatus=="Proposal Writing") studyFile = this.study.getStudyPaperProposal();
    else if(rstatus=="Manus Writing"){
      studyFile = this.study.getStudyPaperManuscript();
    } 

    this.createPSRequestForm.setValue({
      title: this.study.getStudyTitle(),
      abstract: this.study.getStudyDescription(),
      studyFile: studyFile,
      rstatus: this.study.getStudyStatus(),
      date: null,
      timeTo: null,
      timeFrom: null,
      place: null
    });
  }

  gotoRequests(){
    this.router.navigate(['/student/requests']);
  }
  createPSRequest(){
    console.warn("DATE: " + this.createPSRequestForm.value.date);
  }
}
 