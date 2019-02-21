import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/user';
import { ProfessorService } from '../../../shared/services/professor.service';
import { Professor } from '../../../shared/models/professor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  logInForm: FormGroup;

  private currentUser: User;
  private professorUser: Professor;
  private username: string;
  private password: string;

  constructor( 
    public router: Router,
    formBuilder: FormBuilder,
    private userService: UserService,
    private professorService: ProfessorService
  ) { 
    this.logInForm = formBuilder.group({
      username: null,
      password: null
    });
  }

  ngOnInit() {

  }
  onSubmit(){
    this.submitted = true;

    this.username = this.logInForm.value.username;    
    this.password = this.logInForm.value.password;
    console.warn(this.username + " - " +this.password);
    this.logIn();
  }

  logIn(){
    this.userService.logIn(this.username, this.password)
      .subscribe((user)=>{
        if(user){
          this.currentUser = new User(user);
          this.identifyUserModule();
        }
        else{
          //username and/or password no match
        }
      }, 
      error => {
        //login error
        console.error(error);
      }
      
    );
  }

  identifyUserModule(){
    if(this.currentUser.getUserType()=='super'){
      this.router.navigate(['/super/students']);
    }
    else if(this.currentUser.getUserType()=='student'){
      this.router.navigate(['/student/requests']);
    }
    else if(this.currentUser.getUserType()=='professor'){
      this.getProfessorUserType(); //and navigate to corresponding module
    }
    else{
      console.warn("ERROR: There's no user type such as "+this.currentUser.getUserType());
    }
  }
  getProfessorUserType(){
    this.professorService.getProfessor(this.currentUser.getUserTypeId())
      .subscribe((res)=>{
        this.professorUser = new Professor(res);
        if(this.professorUser.getProfessorIsPanelMemberUser()!==null){
          this.router.navigate(['/panel-member/requests']);
        }
        else if(this.professorUser.getProfessorIsOtherUser()!==null){
          //router to Other user module
        }
      });
  }

  
  
}
