import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Professor } from '../../../../shared/models/professor';
import { ProfessorService } from '../../../../shared/services/professor.service';
import { UserService } from '../../../../shared/services/user.service';
import { User } from '../../../../shared/models/user';
import { PanelMemberUserService } from '../../../../shared/services/panel-member-user.service';
import { OtherUserService } from '../../../../shared/services/other-user.service';
import { Subscription } from 'rxjs';
import { OtherUser } from '../../../../shared/models/user-other';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {
  private professors: Professor[];
  private otherUser: OtherUser;
  private user : User;
  private users: User[]=[];
  private corrPassword: string=""; 
  getProfessorsSub: Subscription;

  constructor(
    public router: Router, 
    private professorService: ProfessorService,
    private userService: UserService,
    private panelMemberUserService: PanelMemberUserService,
    private otherUserService: OtherUserService 
  ) { }

  ngOnInit() {
    this.getProfessorsUsers();
  }
  check(profID: string, value: string){
    console.warn("NGfor ProfID: "+ profID + "--- value:" + value);
  }
  
  addPanelMemberUser(prof: Professor){
    console.warn("Object Received: " + prof.getProfessorFname());
    this.professorService.setCurrentProfessor(prof);
    this.getProfessorsSub.unsubscribe();
    this.router.navigate(['/super/professors/confirm-add-pm']);
    
  }
  addOtherUser(prof: Professor, otherType: string){
    console.warn("Object Received: " + prof.getProfessorFname() + "Other Type: "+ otherType);
    this.professorService.setCurrentProfessor(prof);
    this.professorService.setCurrentOtherType(otherType);
    this.router.navigate(['/super/professors/confirm-add-other']);
  }

  getProfessorsUsers(){
    this.getProfessorsSub = this.professorService.getProfessors()
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
  
  getOtherUserType(profOtherId: string){
    this.otherUserService.getOtherUser(profOtherId)
        .subscribe(res =>{
          this.otherUser = new OtherUser(res);
          return this.otherUser.getOtherUserType();
        })
    
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
  editProfessor(prof: Professor){
    this.professorService.setCurrentProfessor(prof);
    this.router.navigate(['/super/professors/edit-professor-form']);
  }
  deleteProfessor(prof: Professor){
    //refactor
    //student panel
    //otherUser
    //pending requests
    //delete panelMemberUser
    //remove from every other document
    //delete user
    this.professors = this.professors.filter(p => p !== prof);
    this.professorService.deleteProfessor(prof).subscribe();
    console.log("Professor Successfully Deleted");
  }
  goToProfessorList(){
    this.router.navigate(['/super/professors']);
  }
  goToAddProfessorForm(){
    this.router.navigate(['/super/professors/add-professor-form']);
  }
}
