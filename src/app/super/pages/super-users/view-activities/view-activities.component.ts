import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-activities',
  templateUrl: './view-activities.component.html',
  styleUrls: ['./view-activities.component.css']
})
export class ViewActivitiesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToSuperUserList(){
    this.router.navigate(['/super/super-users']);
  }
}
