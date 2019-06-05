import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REQUESTS } from './mock-list';
import { Request } from './list';
import { DataService } from './dataService';
import { RequestService } from '../../../../shared/services/request.service';
import { UserService } from '../../../../shared/services/user.service';
import { StudentUserService } from '../../../../shared/services/student-user.service';
import { User } from '../../../../shared/models/user';
import { StudentUser } from '../../../../shared/models/user-student';
import { StudyService } from 'src/app/shared/services/study.service';
import { Study } from 'src/app/shared/models/study';
import { debug } from 'util';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  
  requests = REQUESTS;
  selectedRequest: Request;
  currentUserTypeId: string = "";
  currentUserType: string = "student";

  loggedInUser: User;
  loggedInStudentUser: StudentUser;

  constructor( 
    public router: Router, 
    private dataService:DataService,
    private requestService: RequestService,
    private userService: UserService,
    private studentUserService: StudentUserService,
    private studyService: StudyService
  ) { }

  ngOnInit() {
    this.getLoggedInUser(); //get requsts inside this function
  }
  getLoggedInUser(){
    this.loggedInUser = new User(this.userService.getCurrentUser());
    this.studentUserService.getStudentUser(this.loggedInUser.getUserTypeId())
      .subscribe(res=>{
        this.loggedInStudentUser = new StudentUser(res);
        this.studentUserService.setLoggedInStudentUser(this.loggedInStudentUser);
        console.warn(this.loggedInStudentUser.getStudentUserFullName());
        this.getRequests(); //get requests
        this.getLoggedInStudentUserInfo();
      });
  }
  getRequests(){
    //this.requestService.getPSRequest()
    //check if approved, then, create presentation; else do create nothing

  } 
  getLoggedInStudentUserInfo(){
    //fetches the student study object to store in StudentService
    //panel object is embedded so no need to fetch it
    this.studyService.getStudy(this.loggedInStudentUser.getStudentUserStudyId())
      .subscribe(res=>{
        console.warn(res);
        let fetchedStudy: Study;
        fetchedStudy = new Study(res);
        //store the study object in StudentService
        this.studentUserService.setLoggedInStudentUserStudy(fetchedStudy);
        console.warn("Study fetched and saved successfully!");
      });
  }

  goto(){
    this.router.navigate(['/student/my-calendar']);
  }

  onSelect(request: Request): void {
    this.selectedRequest = request;
    this.dataService.setSelectedRequest(request);
    this.router.navigate(['/student/requests/request-details']);
  }

  createNewRequestForm(){
    this.router.navigate(['/student/requests/create-request']);
  }
  createPSRequestForm(){
    this.router.navigate(['/student/requests/create-presentation-request']);
  }
  createPARequestForm(){
    this.router.navigate(['/student/requests/create-approval-request']);
  }

}
