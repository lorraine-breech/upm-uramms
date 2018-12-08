import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-proposal-request',
  templateUrl: './change-proposal-request.component.html',
  styleUrls: ['./change-proposal-request.component.css']
})
export class ChangeProposalRequestComponent implements OnInit {

  constructor(public router: Router ) { }

  ngOnInit() {
  }
  
  gotoMyStudy(){
    this.router.navigate(['/student/my-study']);
  }

}
