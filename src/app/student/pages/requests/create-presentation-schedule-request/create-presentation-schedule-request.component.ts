import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-presentation-schedule-request',
  templateUrl: './create-presentation-schedule-request.component.html',
  styleUrls: ['./create-presentation-schedule-request.component.css']
})
export class CreatePresentationScheduleRequestComponent implements OnInit {

  constructor(public router: Router ) { }

  ngOnInit() {
  }

  gotoRequests(){
    this.router.navigate(['/student/requests']);
  }
}
