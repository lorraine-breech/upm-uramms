import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-revision',
  templateUrl: './submit-revision.component.html',
  styleUrls: ['./submit-revision.component.css']
})
export class SubmitRevisionComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  gotoRequests(){
    this.router.navigate(['/student/requests']);
  }

}
