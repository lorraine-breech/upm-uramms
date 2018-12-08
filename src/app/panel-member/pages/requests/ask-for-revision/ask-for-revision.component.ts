import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-for-revision',
  templateUrl: './ask-for-revision.component.html',
  styleUrls: ['./ask-for-revision.component.css']
})
export class AskForRevisionComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToRequestList(){
    this.router.navigate(['/panel-member/requests']);
  }

}
