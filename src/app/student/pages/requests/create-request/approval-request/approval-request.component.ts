import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-approval-request',
  templateUrl: './approval-request.component.html',
  styleUrls: ['./approval-request.component.css']
})
export class ApprovalRequestComponent implements OnInit {
  constructor( public router: Router ) { }


  cancel() {
    this.gotoRequests();
  }
  
  save() {
    //this.crisis.name = this.editName;
    this.gotoRequests();
  }
  
  
  gotoRequests(){
    this.router.navigate(['/student/requests/request-list']);
  }
 

  ngOnInit() {
  }

}
