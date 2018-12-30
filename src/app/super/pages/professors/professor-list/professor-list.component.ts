import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Professor } from '../../../../shared/models/professor';
import { ProfessorService } from '../../../../shared/services/professor.service';
import { UserService } from '../../../../shared/services/user.service';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {
  private professors: Professor[];
  private user : User;
  private users: User[]=[];
  private corrPassword: string=""; 

  constructor(
    public router: Router, 
    private professorService: ProfessorService,
    private userService: UserService 
  ) { }

  ngOnInit() {
    this.getProfessorsUsers();
  }

  getProfessorsUsers(){
    this.professorService.getProfessors()
        .subscribe( res => {
          console.warn(res); 
          this.professors = res.map(user => new Professor(user)); 
          for(let professor of this.professors){
            this.getUser(professor.getProfessorId());
          }
        });
  }

  getUser(user_type_id: string){
    this.userService.getUser(user_type_id)
        .subscribe(res => {
          console.warn(res); 
          this.user = new User(res);
          this.users.push(this.user);        
        } );
  }

  getUsername(professorId: String){
    this.corrPassword = "";
    for(let user of this.users){
      if(user.getUserTypeId() === professorId) {
        //console.log(user.getUserTypeId());
        this.corrPassword = user.getUserPassword();
        return user.getUserUsername();
      }
    }
  }

  getPassword(){
    return this.corrPassword;
  }

  isOtherUser(isOtherUser : string){
    let x: boolean;
    if(isOtherUser){//otherUserId
      x = true;
    }
    else{
      x = false;
    }
    return x;
  }
  isPanelMemberUser(isPanelMemberUser : string){
    let x : boolean;
    if(isPanelMemberUser){//panelMemberId
      x = true;
    }
    else{
      x = false;
    }
    return x;
  }
 
  goToAddProfessorForm(){
    this.router.navigate(['/super/professors/add-professor-form']);
  }
}
