import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperUser } from '../../../../shared/models/user-super';

import { SuperUserService } from '../../../../shared/services/super-user.service';

@Component({
  selector: 'app-super-user-list',
  templateUrl: './super-user-list.component.html',
  styleUrls: ['./super-user-list.component.css']
})
export class SuperUserListComponent implements OnInit {
  private superUsers: SuperUser[];

  constructor(
    public router: Router, 
    private superUserService: SuperUserService
    ) { }

  ngOnInit() {
    this.getSuperUsers();
  }

  getSuperUsers(){
    this.superUserService.getSuperUsers()
        .subscribe(res => this.superUsers = res );
  }
 
  goToAddSuperUserForm(){
    this.router.navigate(['/super/super-users/add-super-user-form']);
  }

  goToViewActivities(){
    this.router.navigate(['/super/super-users/view-activities']);
  }

}
