import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StudentUserService } from 'src/app/shared/services/student-user.service';
import { Study } from 'src/app/shared/models/study';
import { RequestService } from 'src/app/shared/services/request.service';
import { StudentUser } from 'src/app/shared/models/user-student';
import { Panel } from 'src/app/shared/models/panel';
import { ReqResponse } from 'src/app/shared/models/request-response';

@Component({
  selector: 'app-create-presentation-schedule-request',
  templateUrl: './create-presentation-schedule-request.component.html',
  styleUrls: ['./create-presentation-schedule-request.component.css']
})
export class CreatePresentationScheduleRequestComponent implements OnInit {
  createPSRequestForm: FormGroup;
  submitted = false;
  private study: Study;
  private student: StudentUser;
  private pres_type: string;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private studentUserService: StudentUserService,
    private requestService: RequestService
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
    this.student = new StudentUser(this.studentUserService.getLoggedInStudentUser());
    let studyFile: string;
    let rstatus = this.study.getStudyStatus();
    if(rstatus=="Proposal Writing") {
      studyFile = this.study.getStudyPaperProposal();
      this.pres_type = "proposal";
    }
    else if(rstatus=="Manus Writing"){
      studyFile = this.study.getStudyPaperManuscript();
      this.pres_type = "manuscript";
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

  onSubmit(){
    this.submitted = true;

    if(this.createPSRequestForm.value.date && this.createPSRequestForm.value.timeFrom && this.createPSRequestForm.value.timeTo && this.createPSRequestForm.value.place){
      let responses: ReqResponse[];
      responses = this.createReqResponseArray();
      console.log("Student Id : " +this.student.getStudentUserId());
      //Every studentUser should have a panel before this
      this.requestService.addPSRequest(
        this.student.getStudentUserId(),
        this.pres_type,
        this.createPSRequestForm.value.date,
        this.createPSRequestForm.value.timeFrom,
        this.createPSRequestForm.value.timeTo,
        this.createPSRequestForm.value.place,
        responses,
        new Date(),
        false,
      ).subscribe(newPSRequest=>{
        if(newPSRequest){
          alert('Presentation Schedule Request Created.');
          //successful
          //clearForm()
        }
        else{
          //unsuccessful
        }
      });
    }
    else{
      alert('Make sure to fill all fields.');
    }
  }

  createReqResponseArray(){
    let response: ReqResponse;
    let responses: ReqResponse[];
    responses = [];
    let panel: Panel;
    panel = new Panel(this.student.getStudentUserPanel());
    console.log("Adviser: "+ panel.getPanelAdviserId());

    if(panel.getPanelAdviserId()){
      response = new ReqResponse();
      response.setResponseObject(panel.getPanelAdviserId(), panel.getPanelAdviserName(), "adviser", 0, null, null);
      responses.push(response);
    }
    else if(panel.getPanelCoAdviserId()){
      response = new ReqResponse();
      response.setResponseObject(panel.getPanelCoAdviserId(), panel.getPanelCoAdviserName(), "co-adviser", 0, null, null);
      responses.push(response);
    }
    else if(panel.getPanelPanelist1Id()){
      response = new ReqResponse();
      response.setResponseObject(panel.getPanelPanelist1Id(), panel.getPanelPanelist1Name(), "panelist1", 0, null, null);
      responses.push(response);
    }
    else if(panel.getPanelPanelist2Id()){
      response = new ReqResponse();
      response.setResponseObject(panel.getPanelPanelist2Id(), panel.getPanelPanelist2Name(), "panelist2", 0, null, null);
      responses.push(response);
    }
    else if(panel.getPanelPanelist3Id()){
      response = new ReqResponse();
      response.setResponseObject(panel.getPanelPanelist3Id(), panel.getPanelPanelist3Name(), "panelist3", 0, null, null);
      responses.push(response);
    }
    else{
      //for debugging purposes only
      alert('You have no panel yet.');
      console.log("No panel.");
      return;
    }

    return responses;
  }
  gotoRequests(){
    this.router.navigate(['/student/requests']);
  }
  createPSRequest(){
    console.warn("DATE: " + this.createPSRequestForm.value.date);
  }
}
 