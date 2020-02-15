import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  selectedRequest:any;
  private is_psrequest: boolean = false;
  private is_parequest: boolean = false;
  private is_cprequest: boolean = false;
  private is_acrequest: boolean = false;
  

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
    
    if(this.requestService.getSelectedRequestType() == 1 ){
      this.is_psrequest = true;
    }
    else if(this.requestService.getSelectedRequestType() == 2 ){
      this.is_parequest = true;
    }
    else if(this.requestService.getSelectedRequestType() == 3 ){
      this.is_cprequest = true;
    }
    else if(this.requestService.getSelectedRequestType() == 4 ){
      this.is_acrequest = true;
    }
    

  }

}
