import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { PanelMemberUserService } from 'src/app/shared/services/panel-member-user.service';
import { PanelMemberUser } from 'src/app/shared/models/user-panel-member';
import { RequestService } from 'src/app/shared/services/request.service';
import { UPMRequest } from 'src/app/shared/models/request-upm';
import { ReqResponse } from 'src/app/shared/models/request-response';
 
@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  private loggedInUser: User;
  private loggedInPanelMemberUSer: PanelMemberUser;
  private requests: UPMRequest[]  = [];
  private is_there_request: boolean = null;
  constructor(
    public router: Router,
    private userService: UserService,
    private panelMemberUserService: PanelMemberUserService,
    private requestService: RequestService
    ) { }

  ngOnInit() {
    this.getLoggedInUser();
  }
  getLoggedInUser(){
    this.loggedInUser = new User(this.userService.getCurrentUser());
    this.panelMemberUserService.getPanelMemberUserByProfId(this.loggedInUser.getUserTypeId())
      .subscribe(res=>{
        this.loggedInPanelMemberUSer = new PanelMemberUser(res);
        console.log("PM Name: " + this.loggedInPanelMemberUSer.getPanelMemberUserFullName());
        localStorage.setItem('currentPanelMemberUser', JSON.stringify(this.loggedInPanelMemberUSer));
        this.getRequests();
      });
  }
  getRequests(){
    console.log("Panel Member Id: " + this.loggedInPanelMemberUSer.getPanelMemberUserId());
    this.requestService.getRequestsByPMOtherID(this.loggedInPanelMemberUSer.getPanelMemberUserId())
      .subscribe(res=>{
        if(res.length){
          this.requests = res.map(request => new UPMRequest(request));
          this.sortRequestList()
          this.is_there_request = true;
          localStorage.setItem('requestList', JSON.stringify(this.requests));
        }
        console.log("Request Returned");
      });
  }
  sortRequestList(){
    this.requests.sort((a,b) => a.getRequestDateCreated().getTime() - b.getRequestDateCreated().getTime());
    
  }
  getDateOnly(date: Date){
    let thisDate: Date;
    thisDate = new Date(date);
    return thisDate.toLocaleDateString();
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
  goToAskForRevision(){
    this.router.navigate(['/panel-member/requests/ask-for-revision']);
  }

}
