import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReqResponse } from 'src/app/shared/models/request-response';
import { UPMRequest } from 'src/app/shared/models/request-upm';

@Component({
  selector: 'app-add-change-panel-member',
  templateUrl: './add-change-panel-member.component.html',
  styleUrls: ['./add-change-panel-member.component.css']
})
export class AddChangePanelMemberComponent implements OnInit {
  private acrequest: UPMRequest;
  private acrequestDetailsForm: FormGroup;
  private isAddRequest: boolean = undefined;
  private isPending: boolean = false;
  private isDisapproved: boolean = false;
  private pmApproved: string[] = null;
  private pmDisapproved: string[]= null;
  private acrequestResponses: ReqResponse[] = null;

  constructor(
    private requestService: RequestService,
    private formBuilder: FormBuilder
  ) { 
    this.acrequestDetailsForm = formBuilder.group({
      dateCreated: null,
      type: null,
      role: null,
      add: null,
      changeFrom: null,
      changeTo: null,
      approvedBy: null,
      disapprovedBy: null,
      status: null   
    });

  }

  ngOnInit() {
    this.acrequest = new UPMRequest(this.requestService.getSelectedRequest());
    let status: string;
    if(this.acrequest.getRequestIsApproved() == null){
      status = "pending";
      this.isPending = true;
    }
    else if(this.acrequest.getRequestIsApproved()){
      status = "approved";
      
    }
    else{
      status = "disapproved";
      this.isDisapproved = true;
    }
    
    if(this.acrequest.getACPanelMemberRequestType()=="add"){
      this.isAddRequest = true;

      this.acrequestDetailsForm.setValue({
        dateCreated: this.acrequest.getRequestDateCreated().toLocaleDateString(),
        type: this.acrequest.getACPanelMemberRequestType(),
        role: this.acrequest.getAddChangePanelMemberRequestRoleType(),
        add: this.acrequest.getACPanelMemberRequestAdd(),
        changeFrom: null,
        changeTo: null,
        approvedBy: null,
        disapprovedBy: null,
        status: status                                     
      });
    }
    else{
      this.isAddRequest = false;
      this.acrequestResponses = this.acrequest.getRequestResponses();
      this.acrequestResponses.forEach(function(response){
        response = new ReqResponse(response);
        if(response.getResponse()==1){
          this.pmApproved.push(response.getProfName());
        }
        else if(response.getResponse()==2){
          this.pmDisapproved.push(response.getProfName());
        }
      });

      this.acrequestDetailsForm.setValue({
        dateCreated: this.acrequest.getRequestDateCreated().toLocaleDateString(),
        type: this.acrequest.getACPanelMemberRequestType(),
        role: this.acrequest.getAddChangePanelMemberRequestRoleType(),
        add: null,
        changeFrom: this.acrequest.getACPanelMemberRequestChangeFrom(),
        changeTo: this.acrequest.getACPanelMemberRequestChangeTo(),
        approvedBy: null,
        disapprovedBy: null,
        status: status
      });
    }
    
  }

}
