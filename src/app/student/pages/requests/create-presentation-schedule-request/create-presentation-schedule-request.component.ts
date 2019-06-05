import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
//import { NgbModule } from '@ng-bo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-presentation-schedule-request',
  templateUrl: './create-presentation-schedule-request.component.html',
  styleUrls: ['./create-presentation-schedule-request.component.css']
})
export class CreatePresentationScheduleRequestComponent implements OnInit {
  createPSRequestForm: FormGroup;
  submitted = false;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder
  ){
    this.createPSRequestForm = formBuilder.group({
      title: null,
      abstract: null,
      rstatus: null,
      date: null,
      //time: ,
      //place: 
    });
  }

  ngOnInit() {
  }

  gotoRequests(){
    this.router.navigate(['/student/requests']);
  }
  createPSRequest(){
    console.warn("DATE: " + this.createPSRequestForm.value.date);
  }
}
 