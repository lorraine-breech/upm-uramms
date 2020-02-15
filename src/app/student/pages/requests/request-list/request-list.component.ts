import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../../../shared/services/request.service';
import { UserService } from '../../../../shared/services/user.service';
import { StudentUserService } from '../../../../shared/services/student-user.service';
import { User } from '../../../../shared/models/user';
import { StudentUser } from '../../../../shared/models/user-student';
import { StudyService } from 'src/app/shared/services/study.service';
import { Study } from 'src/app/shared/models/study';
import { Panel } from 'src/app/shared/models/panel';
import { Presentation } from 'src/app/shared/models/presentation';
import { PresentationService } from 'src/app/shared/services/presentation.service';
import { ReqResponse } from 'src/app/shared/models/request-response';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UPMRequest } from 'src/app/shared/models/request-upm';
import { ReqStudent } from 'src/app/shared/models/request-student';
 
@Component({
  selector: 'app-request-list', 
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  //Requests shown will depend on the status of the student.
  private is_there_request: boolean = false;
  private requests: UPMRequest[] = [];

  private studentStatus: number; //0-proposal, 1-implementation, 2-manuscript, 3-completed
  private isImplementation: boolean = false;
  private isCompleted: boolean = false;

  private requestsForm: FormGroup;
  selectedRequest: Request;
  currentUserTypeId: string = "";
  currentUserType: string = "student";

  loggedInUser: User;
  loggedInStudentUser: StudentUser;

  constructor( 
    public router: Router, 
    private requestService: RequestService,
    private userService: UserService,
    private studentUserService: StudentUserService,
    private studyService: StudyService,
    private presentationService: PresentationService,
    private formBuilder: FormBuilder
  ) { 
    this.requestsForm = formBuilder.group({
      psrequestStatus: null,
      parequestStatus: null,
      cprequestStatus: null,
      acrequestStatus: null
    });
  }

  ngOnInit() {
    this.getLoggedInUser(); //get requests inside this function
  }
  getLoggedInUser(){
    this.loggedInUser = new User(this.userService.getCurrentUser());
    this.studentUserService.getStudentUser(this.loggedInUser.getUserTypeId())
      .subscribe(res=>{
        this.loggedInStudentUser = new StudentUser(res);

        localStorage.setItem('currentStudentUser', JSON.stringify(this.loggedInStudentUser));

        this.getAndSetStudentStatus();
        this.studentUserService.setLoggedInStudentUser(this.loggedInStudentUser);
        console.warn(this.loggedInStudentUser.getStudentUserFullName());
        this.getLoggedInStudentUserInfo();
      });
  }
  viewRequestDetail(request: UPMRequest){
    if(request.getRequestType() == "psrequest") this.viewPSRequestDetail(request);
    else if(request.getRequestType() == "acrequest") this.viewACRequestDetail(request);
    else if(request.getRequestType() == "cprequest") this.viewCPRequestDetail(request);
    else if(request.getRequestType() == "parequest") this.viewPARequestDetail(request);
  }
  viewPSRequestDetail(psrequest: UPMRequest){
    this.requestService.setSelectedRequest(psrequest);
    this.requestService.setSelectedRequestType(1);
    this.router.navigate(['/student/requests/request-details']);
  }
  viewPARequestDetail(parequest: UPMRequest){
    this.requestService.setSelectedRequest(parequest);
    this.requestService.setSelectedRequestType(2);
    this.router.navigate(['/student/requests/request-details']);
  }
  viewCPRequestDetail(cprequest: UPMRequest){
    this.requestService.setSelectedRequest(cprequest);
    this.requestService.setSelectedRequestType(3);
    this.router.navigate(['/student/requests/request-details']);
  }
  viewACRequestDetail(acrequest: UPMRequest){
    this.requestService.setSelectedRequest(acrequest);
    this.requestService.setSelectedRequestType(4);
    this.router.navigate(['/student/requests/request-details']);
  }

  getDateOnly(date: Date){
    let thisDate: Date;
    thisDate = new Date(date);
    return thisDate.toLocaleDateString();
  }
  getAndSetStudentStatus(){
    switch(this.loggedInStudentUser.getStudentUserStatus()){
      case "proposal":
        this.studentStatus = 0;
        break;
      case "implementation":
        this.studentStatus = 1;
        break;
      case "manuscript":
        this.studentStatus = 2;
        break;
      case "completed":
        this.studentStatus = 3;
    }
    if(this.studentStatus == 1){
      this.isImplementation = true; 
      return;
    }
    else if(this.studentStatus == 3){
      this.isCompleted = true;
      return;
    }
    else if(this.studentStatus == 0 || this.studentStatus == 2){

      this.getRequests(); 
    }
  }
  getRequestStatus(request: UPMRequest){
    if(request.getRequestType()=="parequest"){
      if(request.getPARequestLevel() == 0){
        return "panel level";
      }
      else if(request.getPARequestLevel() == 1){
        return "department chair level";
      }
      else if(request.getPARequestLevel() == 2){
        return "dean level";
      }
      else if(request.getPARequestLevel() == 3){
        return "college secretary level";
      }
      else if(request.getPARequestLevel() ==4){
          return "completed";
      }
    }
    else{
      if(request.getRequestIsApproved() == null){
        return "pending";
      }
      else if(request.getRequestIsApproved()){
        return "approved";
      }
      else{
        return "disapproved";
      }  
    }
    
  }
  getRequests(){
    this.requestService.getRequests(this.loggedInStudentUser.getStudentUserId())
      .subscribe((res)=>{
        if(res.length){
          this.requests = res.map(request => new UPMRequest(request));
          this.sortRequestList()
          this.is_there_request = true;
          localStorage.setItem('requestList', JSON.stringify(this.requests));
          console.log("Request Returned YES ");
        }
        console.log("Request Returned: ");
        
      });
  }
  
  sortRequestList(){
    this.requests.sort((a,b) => a.getRequestDateCreated().getTime() - b.getRequestDateCreated().getTime());
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
        localStorage.setItem('currentStudy', JSON.stringify(fetchedStudy));
        
        console.warn("Study fetched and saved successfully!");
      });
  }

  goto(){
    this.router.navigate(['/student/my-calendar']);
  }

  createNewRequestForm(){
    this.router.navigate(['/student/requests/create-request']);
  }
  createPSRequestForm(){
    this.router.navigate(['/student/requests/create-presentation-request']);
  }
  createPARequestForm(){
    //this.router.navigate(['/student/requests/create-approval-request']);
    //no need for a form, this request is automatically created
    //paper_type: string
    //presentation_id
    //revisions: Revision[]
    //level: number
  }
  createReqStudent(){
    let reqStudent: ReqStudent;
    let currentStudentUser = new StudentUser(JSON.parse(localStorage.getItem('currentStudentUser')));
    reqStudent = new ReqStudent();
    reqStudent.setReqStudent(currentStudentUser.getStudentUserId(), currentStudentUser.getStudentUserStudentNumber(), currentStudentUser.getStudentUserCourse(), currentStudentUser.getStudentUserFullNameLF());
    return reqStudent;
  }
  
  isAllowedPARequest(){ //temp not called
    //check if a PSRequest exists and that the paper has been presented and passed by the panel
    let presentation: Presentation;
    let reqStudent = new ReqStudent(this.createReqStudent());

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
                reqStudent,
                this.createReqResponseArray(),
                new Date(),
                null,
                "proposal",
                presentation.getPresentationId(),
                [], //revisions array is empty at the start
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
                reqStudent,
                this.createReqResponseArray(),
                new Date(),
                null,
                "manuscript",
                presentation.getPresentationId(),
                [], //revisions array is empty at the start
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
