import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-panel-list',
  templateUrl: './my-panel-list.component.html',
  styleUrls: ['./my-panel-list.component.css']
})
export class MyPanelListComponent implements OnInit {

  showAdviser: boolean = true;
  showCoAdviser: boolean = false;
  showPanelist1: boolean = false;
  showPanelist2: boolean = false;
  showPanelist3: boolean = false;
  isNoCoAdviser: boolean = true;


  constructor( private router: Router ) { }

  ngOnInit() {
  }

  changePanelMemberRequest(){
    this.router.navigate(['/student/my-panel/change-pm-request']);
  }
  addPanelMemberRequest(){
    this.router.navigate(['/student/my-panel/add-pm-request']);
  }

}
