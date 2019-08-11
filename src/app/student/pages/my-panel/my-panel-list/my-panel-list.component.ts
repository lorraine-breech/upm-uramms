import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentUserService } from 'src/app/shared/services/student-user.service';
import { StudentUser } from 'src/app/shared/models/user-student';
import { Panel } from 'src/app/shared/models/panel';
import { RequestService } from 'src/app/shared/services/request.service';
import { PanelMemberUser } from 'src/app/shared/models/user-panel-member';
import { PanelMemberUserService } from 'src/app/shared/services/panel-member-user.service';

@Component({
  selector: 'app-my-panel-list',
  templateUrl: './my-panel-list.component.html',
  styleUrls: ['./my-panel-list.component.css']
})
export class MyPanelListComponent implements OnInit {

  private showAdviser: boolean = false;
  private showCoAdviser: boolean = false;
  private showPanelist1: boolean = false;
  private showPanelist2: boolean = false;
  private showPanelist3: boolean = false;
  //isNoCoAdviser: boolean = true;
  private panel: Panel;
  private loggedInStudentUser: StudentUser;
  
  

  constructor( 
    private router: Router,
    private studentUserService: StudentUserService,
    private requestService: RequestService,
    private panelMemberUserService: PanelMemberUserService
    ) { }
 
  ngOnInit() {
    this.loggedInStudentUser = new StudentUser(this.studentUserService.getLoggedInStudentUser());
    this.viewPanel();
 
  }
 
  viewPanel(){
    this.panel = new Panel(this.loggedInStudentUser.getStudentUserPanel());
    if(this.panel.getPanelAdviserId()) this.showAdviser = true;
    if(this.panel.getPanelCoAdviserId()) this.showCoAdviser = true;
    if(this.panel.getPanelPanelist1Id()) this.showPanelist1 = true; //this block of code can still be optimized
    if(this.panel.getPanelPanelist2Id()) this.showPanelist2 = true;
    if(this.panel.getPanelPanelist3Id()) this.showPanelist3 = true;
  }

  changePanelMemberRequest(panelMemberId: string, role: number){
    let panelMember: PanelMemberUser;
    
    this.panelMemberUserService.getPanelMemberUser(panelMemberId)
      .subscribe((res)=>{
        panelMember = new PanelMemberUser(res);
        this.requestService.setCurrentPMToChange(panelMember);
        if(role == 0) this.requestService.setCurrentRole("adviser");
        if(role == 1) this.requestService.setCurrentRole("co-adviser");
        if(role >= 2) this.requestService.setCurrentRole("panelist");
        this.router.navigate(['/student/my-panel/change-pm-request']);
      });
  }
  addPanelMemberRequest(){
    this.router.navigate(['/student/my-panel/add-pm-request']);
  }

}
