import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REQUESTS } from './mock-list';
import { Request } from './list';
import { DataService } from './dataService';
import { RequestService } from '../../../../shared/services/request.service';
import { UserService } from '../../../../shared/services/user.service';
import { StudentUserService } from '../../../../shared/services/student-user.service';
import { User } from '../../../../shared/models/user';
import { StudentUser } from '../../../../shared/models/user-student';
import { StudyService } from 'src/app/shared/services/study.service';
import { Study } from 'src/app/shared/models/study';
import { debug } from 'util';
import { e } from '@angular/core/src/render3';
import { Panel } from 'src/app/shared/models/panel';
import { Presentation } from 'src/app/shared/models/presentation';
import { PresentationService } from 'src/app/shared/services/presentation.service';
import { PresentationScheduleComponent } from '../request-details/presentation-schedule/presentation-schedule.component';
import { ID_SEPARATOR } from '@angular/compiler/src/render3/view/util';
import { ReqResponse } from 'src/app/shared/models/request-response';
import { Revision } from 'src/app/shared/models/revision';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  
  requests = REQUESTS;
  selectedRequest: Request;
  currentUserTypeId: string = "";
  currentUserType: string = "student";

  loggedInUser: User;
  loggedInStudentUser: StudentUser;

  constructor( 
    public router: Router, 
    private dataService:DataService,
    private requestService: RequestService,
    private userService: UserService,
    private studentUserService: StudentUserService,
    private studyService: StudyService,
    private presentationService: PresentationService 
  ) { }

  ngOnInit() {
    this.getLoggedInUser(); //get requsts inside this function
  }
  getLoggedInUser(){
    this.loggedInUser = new User(this.userService.getCurrentUser());
    this.studentUserService.getStudentUser(this.loggedInUser.getUserTypeId())
      .subscribe(res=>{
        this.loggedInStudentUser = new StudentUser(res);
        this.studentUserService.setLoggedInStudentUser(this.loggedInStudentUser);
        console.warn(this.loggedInStudentUser.getStudentUserFullName());
        this.getRequests(); //get requests
        this.getLoggedInStudentUserInfo();
      });
  }
  getRequests(){
    //this.requestService.getPSRequest()
    //check if approved, then, create presentation; else do create nothing

  } 
  getLoggedInStudentUserInfo(){
    //fetches the student study object to store in StudentService
    //panel object is embedded so no need to fetch it
    this.studyService.getStudy(this.loggedInStudentUser.getStudentUserStudyId())
      .subscribe(res=>{
        console.warn(res);
        let fetchedStudy: Study;
        fetchedStudy = new Study(res);
        //store the study object in StudentService
        this.studentUserService.setLoggedInStudentUserStudy(fetchedStudy);
        console.warn("Study fetched and saved successfully!");
      });
  }

  goto(){
    this.router.navigate(['/student/my-calendar']);
  }

  onSelect(request: Request): void {
    this.selectedRequest = request;
    this.dataService.setSelectedRequest(request);
    this.router.navigate(['/student/requests/request-details']);
  }

  createNewRequestForm(){
    this.router.navigate(['/student/requests/create-request']);
  }
  createPSRequestForm(){
    this.router.navigate(['/student/requests/create-presentation-request']);
  }
  createPARequestForm(){
    this.router.navigate(['/student/requests/create-approval-request']);
  }
  isAllowedPARequest(){
    //check if a PSRequest exists and that the paper has been presented and passed by the panel
    let presentation: Presentation;
    if(this.loggedInStudentUser.getStudentUserStatus()=="proposal"){
      if(this.loggedInStudentUser.getStudentUserPresentationProposalId()){
        //get the presentation obj
        this.presentationService.getPresentation(this.loggedInStudentUser.getStudentUserPresentationProposalId())
          .subscribe((res)=>{
            presentation = new Presentation(res);
          //check if passed
            if(presentation.getPresentationIsPassed()){
              //presentation is passed
              //create a paper approval
              this.requestService.addPARequest(
                this.loggedInStudentUser.getStudentUserId(),
                "proposal",
                presentation.getPresentationId(),
                this.createReqResponseArray(),
                [], //revisions array is empty at the start
                new Date(),
                0 // 0=panel
              ).subscribe((addedPARequest)=>{
                if(addedPARequest){
                  //Success
                }
                else{
                  //unsuccessful
                }
              });
            }
          });
      }
      else{
        alert('You have not presented your proposal yet.')
      }
      
    }
    else if(this.loggedInStudentUser.getStudentUserStatus()=="manuscript"){
      if(this.loggedInStudentUser.getStudentUserPresentationManuscriptId()){
        //get the presentation obj
        this.presentationService.getPresentation(this.loggedInStudentUser.getStudentUserPresentationManuscriptId())
          .subscribe((res)=>{
            presentation = new Presentation(res);
          //check if passed
            if(presentation.getPresentationIsPassed()){
              //presentation is passed
              //create a paper approval
              this.requestService.addPARequest(
                this.loggedInStudentUser.getStudentUserId(),
                "manuscript",
                presentation.getPresentationId(),
                this.createReqResponseArray(),
                [], //revisions array is empty at the start
                new Date(),
                0 // 0=panel
              ).subscribe((addedPARequest)=>{
                if(addedPARequest){
                  //Success
                }
                else{
                  //unsuccessful
                }
              });
            }
          });
      }
      else{
        //not allowed
        //You have not presented yet.
        alert('You have not presented your manuscript yet.');

      }
    }
    else{
      alert('You are still on implementation. Create a Presentation Request if you are ready.');
    }
    
  }
  isAllowedPSRequest(){
    if(!this.isPanelExist()){
      alert('You have no valid panel yet.');
      this.router.navigate(['/student/my-panel']);
    }
    else{
      if(!this.isStudyExist()){
        alert('You have not added a study yet.');
        this.router.navigate(['/student/my-study/add-study']);
      }
      else{
        this.createPSRequestForm();
      }
    }
  }
  
  createReqResponseArray(){
    let response: ReqResponse;
    let responses: ReqResponse[];
    responses = [];
    let panel: Panel;
    panel = new Panel(this.loggedInStudentUser.getStudentUserPanel());
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
  isPanelExist(){
    //checks if the student has a panel already
    //valid panels:
    //panel 1: 1 adviser, 1 coadviser, 1 panelist
    //panel 2: 1 adviser, 1 coadviser, 2 panelists
    //panel 3: 1 adviser, 2 panelists
    //panel 4: 1 adviser, 3 panelists
    //maybe add a panelVariation property in Panel model??
    let panel: Panel;
    panel = new Panel(this.loggedInStudentUser.getStudentUserPanel());
    //conditions
    //panel 1
    if(panel.getPanelAdviserId() && panel.getPanelCoAdviserId() && panel.getPanelPanelist1Id()){
      return true;
    }
    //panel 2
    else if(panel.getPanelAdviserId() && panel.getPanelPanelist1Id() && panel.getPanelPanelist2Id()){
      return true;
    }
    //panel 3
    else if(panel.getPanelAdviserId() && panel.getPanelCoAdviserId() && panel.getPanelPanelist1Id() && panel.getPanelPanelist2Id()){
      return true;
    }
    //panel 4
    else if(panel.getPanelAdviserId() && panel.getPanelPanelist1Id() && panel.getPanelPanelist2Id() && panel.getPanelPanelist3Id()){
      return true;
    }
    else{
      return false;
    }
    
  }
  isStudyExist(){
    //check if the student has a study already
    if(this.loggedInStudentUser.getStudentUserStudyId()){
      return true;
    }
    else{
      return false;
    }
  }
}
