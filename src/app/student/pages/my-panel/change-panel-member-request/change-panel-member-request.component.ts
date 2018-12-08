import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-panel-member-request',
  templateUrl: './change-panel-member-request.component.html',
  styleUrls: ['./change-panel-member-request.component.css']
})
export class ChangePanelMemberRequestComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  goToMyPanelList(){
    this.router.navigate(['/student/my-panel']);
  }

}
