import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  goToAskForRevision(){
    this.router.navigate(['/panel-member/requests/ask-for-revision']);
  }

}
