import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentUserService } from 'src/app/shared/services/student-user.service';

@Component({
  selector: 'app-create-paper-approval-request',
  templateUrl: './create-paper-approval-request.component.html',
  styleUrls: ['./create-paper-approval-request.component.css']
})
export class CreatePaperApprovalRequestComponent implements OnInit {
  createPARequestForm: FormGroup;
  submitted = false;
  
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private studentUserService: StudentUserService
  ) { 
    this.createPARequestForm = formBuilder.group({
      title: null,
      abstract: null,
      rstatus: null
    });
  }

  ngOnInit() {
  }
  gotoRequests(){
    this.router.navigate(['/student/requests']);
  }
}
