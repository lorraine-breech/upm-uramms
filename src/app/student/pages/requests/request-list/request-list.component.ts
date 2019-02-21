import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REQUESTS } from './mock-list';
import { Request } from './list';
import { DataService } from './dataService';
import { RequestService } from '../../../../shared/services/request.service';

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

  constructor( 
    public router: Router, 
    private dataService:DataService,
    private requestService: RequestService 
  ) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests(){
    //this.requestService.getCPRequest()
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

}
