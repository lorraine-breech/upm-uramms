import { Component, OnInit } from '@angular/core';
import { StudentUserService } from 'src/app/shared/services/student-user.service';
import { PMStudent } from 'src/app/shared/models/panel-member-student';
import { PanelMemberUser } from 'src/app/shared/models/user-panel-member';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  private adviseeIDs: string [];
  private coadviseeIDs: string[];
  private paneleeIDs: string[];

  private studentList: PMStudent[];
  private loggedInPanelMemberUSer: PanelMemberUser;


  constructor(
    private studentUserService: StudentUserService
  ) { 

  }

  ngOnInit() {
    this.loggedInPanelMemberUSer = new PanelMemberUser(JSON.parse(localStorage.getItem('currentPanelMemberUser')));
    this.studentList = this.loggedInPanelMemberUSer.getPanelMemberUserStudentList();
  }

}
