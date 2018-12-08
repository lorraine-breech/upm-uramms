import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-study-details',
  templateUrl: './my-study-details.component.html',
  styleUrls: ['./my-study-details.component.css']
})
export class MyStudyDetailsComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  changeProposalRequest(){
    this.router.navigate(['/student/my-study/change-proposal-request']);
  }

}
