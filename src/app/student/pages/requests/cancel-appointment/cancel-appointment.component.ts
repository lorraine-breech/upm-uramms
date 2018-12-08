import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-appointment',
  templateUrl: './cancel-appointment.component.html',
  styleUrls: ['./cancel-appointment.component.css']
})
export class CancelAppointmentComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  gotoRequests(){
    this.router.navigate(['/student/requests']);
  }

}
