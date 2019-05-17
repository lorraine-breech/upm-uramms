import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentUser } from '../../../../shared/models/user-student';
import { StudentUserService } from '../../../../shared/services/student-user.service';
import { UserService } from '../../../../shared/services/user.service';
import { User } from '../../../../shared/models/user';
import { Panel } from 'src/app/shared/models/panel';
import { ProfessorService } from 'src/app/shared/services/professor.service';
import { Professor } from 'src/app/shared/models/professor';
import { PanelMemberUserService } from 'src/app/shared/services/panel-member-user.service';
import { PanelMemberUser } from 'src/app/shared/models/user-panel-member';
import { StudyService } from 'src/app/shared/services/study.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  private studentUsers: StudentUser[];
  private users: User[] = [];
  private user: User;
  private corrPassword: string=""; 
  constructor(
    public router: Router, 
    private studentUserService: StudentUserService,
    private panelMemberUserService: PanelMemberUserService,
    private studyService: StudyService,
    private userService: UserService 
  ){}
  
  ngOnInit() {
    this.getStudentUsers();
  }


  getStudentUsers(){
    this.studentUserService.getStudentUsers()
        .subscribe(res => {
          console.warn(res); 
          this.studentUsers = res.map(user => new StudentUser(user));
          for(let studentUser of this.studentUsers){
            this.getUser(studentUser.getStudentUserId());
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

  getUsername(studentUserId: String){
    this.corrPassword="";
    for(let user of this.users){
      if(user.getUserTypeId() === studentUserId) {
        //console.log(user.getUserTypeId());
        this.corrPassword = user.getUserPassword();
        return user.getUserUsername();
      }
    }
  }

  getPassword(){
    return this.corrPassword;
  }

  editStudentUser(studentUser: StudentUser){
    this.studentUserService.setCurrentStudentUser(studentUser);
    this.router.navigate(['/super/students/edit-student-form']);
  }

  deleteStudentUser( studentUser: StudentUser){
    //remove studentID from panelMemberUsers Student List
    this.updateRelatedPanelMembers(studentUser);
    //delete study
    this.deleteRelatedStudy(studentUser);
    //delete presentation
    this.deleteRelatedPresentation(studentUser);
    //delete all requests
    this.deleteRelatedRequests(studentUser);
    //delete student user object
    this.studentUsers = this.studentUsers.filter(s => s !== studentUser);
    this.studentUserService.deleteStudentUser(studentUser).subscribe();
  }
  deleteRelatedPresentation(studentUser: StudentUser){

  }
  deleteRelatedRequests(studentUser: StudentUser){

  }
  deleteRelatedStudy(studentUser: StudentUser){
    this.studyService.deleteStudy(studentUser.getStudentUserStudyId()).subscribe(()=>{});
  }
  updateRelatedPanelMembers(studentUser: StudentUser){
    //remove from panelmembers' student list
    let adviser: PanelMemberUser, coadviser: PanelMemberUser;
    let panellist1: PanelMemberUser, panellist2: PanelMemberUser, panellist3: PanelMemberUser;
    //, coadviser: Professor, panellist1: string, panellist2: string, panellist3: string; 
    let panel: Panel; //stores panelMemberUserIDs
    let updatedPanelMemberUser: PanelMemberUser;
    panel = new Panel(studentUser.getStudentUserPanel()); 
  
    if(panel.getPanelAdviserId()){
      //getPanelMemberUser 
      this.panelMemberUserService.getPanelMemberUser(panel.getPanelAdviserId())
      .subscribe(res=>{
        adviser = new PanelMemberUser(res);
        //relation: 0=adviser, 1=coadviser, 2=panelee
        updatedPanelMemberUser = new PanelMemberUser(this.removeStudentFromList(adviser, 0, studentUser.getStudentUserId()));  
        this.panelMemberUserService.updatePanelMemberUser(updatedPanelMemberUser)
          .subscribe(()=>{
            console.log("Adviser successfully updated! ");
          });
      });
    }
    else if(panel.getPanelCoAdviserId()){
      //getPanelMemberUser 
      this.panelMemberUserService.getPanelMemberUser(panel.getPanelAdviserId())
      .subscribe(res=>{
        coadviser = new PanelMemberUser(res);
        //relation: 0=adviser, 1=coadviser, 2=panelee
        updatedPanelMemberUser = new PanelMemberUser(this.removeStudentFromList(coadviser, 1, studentUser.getStudentUserId()));  
        this.panelMemberUserService.updatePanelMemberUser(updatedPanelMemberUser)
          .subscribe(()=>{
            console.log("Coadviser successfully updated! ");
          });
      });
    }
    else if(panel.getPanelPanelist1Id()){
      //getPanelMemberUser 
      this.panelMemberUserService.getPanelMemberUser(panel.getPanelAdviserId())
      .subscribe(res=>{
        panellist1 = new PanelMemberUser(res);
        //relation: 0=adviser, 1=coadviser, 2=panelee
        updatedPanelMemberUser = new PanelMemberUser(this.removeStudentFromList(panellist1, 2, studentUser.getStudentUserId()));  
        this.panelMemberUserService.updatePanelMemberUser(updatedPanelMemberUser)
          .subscribe(()=>{
            console.log("Panellist1 successfully updated! ");
          });
      });
    }
    else if(panel.getPanelPanelist2Id()){
      //getPanelMemberUser 
      this.panelMemberUserService.getPanelMemberUser(panel.getPanelAdviserId())
      .subscribe(res=>{
        panellist2 = new PanelMemberUser(res);
        //relation: 0=adviser, 1=coadviser, 2=panelee
        updatedPanelMemberUser = new PanelMemberUser(this.removeStudentFromList(panellist2, 2, studentUser.getStudentUserId()));  
        this.panelMemberUserService.updatePanelMemberUser(updatedPanelMemberUser)
          .subscribe(()=>{
            console.log("Panellist2 successfully updated! ");
          });
      });
    }
    else if(panel.getPanelPanelist3Id()){
      //getPanelMemberUser 
      this.panelMemberUserService.getPanelMemberUser(panel.getPanelAdviserId())
      .subscribe(res=>{
        panellist3 = new PanelMemberUser(res);
        //relation: 0=adviser, 1=coadviser, 2=panelee
        updatedPanelMemberUser = new PanelMemberUser(this.removeStudentFromList(panellist3, 2, studentUser.getStudentUserId()));  
        this.panelMemberUserService.updatePanelMemberUser(updatedPanelMemberUser)
          .subscribe(()=>{
            console.log("Panellist3 successfully updated! ");
          });
      });
    }
  }
  removeStudentFromList(panelMember: PanelMemberUser, relation: number, studentUserId: string){
    //relation: 0=adviser, 1=coadviser, 2=panelee
    let studentArray: string[];
    switch(relation){
      case 0:
        studentArray = panelMember.getPanelMemberUserAdviseeId();
        studentArray = studentArray.filter(s => s !== studentUserId);
        panelMember.setPanelMemberUserAdviseeId(studentArray);
        break;
      case 1:
        studentArray = panelMember.getPanelMemberUserCoAdviseeId();
        studentArray = studentArray.filter(s => s !== studentUserId);
        panelMember.setPanelMemberUserCoAdviseeId(studentArray);
        break;
      case 2:
        studentArray = panelMember.getPanelMemberUserPaneleeId();
        studentArray = studentArray.filter(s => s !== studentUserId);
        panelMember.setPanelMemberUserPaneleeId(studentArray);
        break;
    }
    return panelMember;
  }
  getCourseName(courseID: string){
    //service function
  }

  goToAddStudentForm(){
    this.router.navigate(['/super/students/add-student-form']);
  }
}
