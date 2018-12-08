import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-paper-approval-request',
  templateUrl: './create-paper-approval-request.component.html',
  styleUrls: ['./create-paper-approval-request.component.css']
})
export class CreatePaperApprovalRequestComponent implements OnInit {

  constructor(public router: Router ) { }

  ngOnInit() {
  }
  gotoRequests(){
    this.router.navigate(['/student/requests']);
  }
}
