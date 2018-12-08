import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-request',
  templateUrl: './cancel-request.component.html',
  styleUrls: ['./cancel-request.component.css']
})
export class CancelRequestComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  gotoRequests(){
    this.router.navigate(['/student/requests']);
  }

}
