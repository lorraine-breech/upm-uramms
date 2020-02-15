import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentUserService } from 'src/app/shared/services/student-user.service';
import { ReqResponse } from 'src/app/shared/models/request-response';
import { UPMRequest } from 'src/app/shared/models/request-upm';

@Component({
  selector: 'app-presentation-schedule',
  templateUrl: './presentation-schedule.component.html',
  styleUrls: ['./presentation-schedule.component.css']
})
export class PresentationScheduleComponent implements OnInit {
  private psrequest: UPMRequest;
  private psrequestDetailsForm: FormGroup;
  private pmApproved: string[] = null;
  private pmDisapproved: string[]= null;
  private psrequestResponses: ReqResponse[];
  private isDisapproved = false;
  private isPending = false;
  
  constructor( 
    private requestService: RequestService,
    private formBuilder: FormBuilder,
    private studentUserService: StudentUserService
  ) {
    this.psrequestDetailsForm = formBuilder.group({
      dateCreated: null,
      title: null,
      type: null,
      date: null,
      time: null,
      place: null,
      approvedBy: null,
      disapprovedBy: null,
      status: null
    });

  }

  ngOnInit() {
    this.psrequest = new UPMRequest(this.requestService.getSelectedRequest());
    //localStorage.
    let status: string;
    if(this.psrequest.getRequestIsApproved() == null){
      status = "pending";
      this.isPending = true;
    }
    else if(this.psrequest.getRequestIsApproved()){
      status = "approved";
      
    }
    else{
      status = "disapproved";
      this.isDisapproved = true;
    }

    this.psrequestResponses = this.psrequest.getRequestResponses();
    this.psrequestResponses.forEach(function(response){
      response = new ReqResponse(response);
      if(response.getResponse()==1){
        this.pmApproved.push(response.getProfName());
      }
      else if(response.getResponse()==2){
        this.pmDisapproved.push(response.getProfName());
      }
    });
    
    let time: string;
    time = this.psrequest.getPSRequestPresTimeStart() + " - " + this.psrequest.getPSRequestPresTimeEnd();

    this.psrequestDetailsForm.setValue({
      dateCreated: this.psrequest.getRequestDateCreated().toLocaleDateString(),
      title: this.studentUserService.getLoggedInStudentUserStudy().getStudyTitle(), 
      type: this.psrequest.getPSRequestPresType(),
      date: this.psrequest.getPSRequestPresDate().toLocaleDateString(),
      time: time,
      place: this.psrequest.getPSRequestPresPlace(),
      approvedBy: this.pmApproved,
      disapprovedBy: this.pmDisapproved,
      status: status
    });

  }

}
