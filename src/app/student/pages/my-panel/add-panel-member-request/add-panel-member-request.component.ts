import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from 'src/app/shared/models/professor';
import { RequestService } from 'src/app/shared/services/request.service';
import { ProfessorService } from 'src/app/shared/services/professor.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReqResponse } from 'src/app/shared/models/request-response';
import { Panel } from 'src/app/shared/models/panel';
import { StudentUser } from 'src/app/shared/models/user-student';
import { StudentUserService } from 'src/app/shared/services/student-user.service';
import { ReqStudent } from 'src/app/shared/models/request-student';

@Component({
  selector: 'app-add-panel-member-request',
  templateUrl: './add-panel-member-request.component.html',
  styleUrls: ['./add-panel-member-request.component.css']
})
export class AddPanelMemberRequestComponent implements OnInit {
  
  addPanelMemberForm: FormGroup;
  private pmProfessor: Professor;
  private pmProfessors: Professor[];
  private submitted = false;
  private loggedInStudentUser: StudentUser; 
  constructor( 
    public router: Router,
    private requestService: RequestService,
    private professorService: ProfessorService,
    private studentUserService: StudentUserService,
    private formBuilder: FormBuilder 
    ) { 
      this.addPanelMemberForm = formBuilder.group({
        role: null,
        professor: null,
        semester: null,
        academicYear: null,
        message: null
      });
    }

  ngOnInit() {
    this.loggedInStudentUser = new StudentUser(this.studentUserService.getLoggedInStudentUser());
    this.getPanelMemberProfessors();
  }
  getPanelMemberProfessors(){
    this.professorService.getProfessorPanelMemberUsers()
      .subscribe(res=>{
        this.pmProfessors = res.map(pmProfessor => new Professor(pmProfessor));
      });
  }
  compareFn(c1: Professor, c2: Professor): boolean {
    return c1 && c2 ? c1.getProfessorId() === c2.getProfessorId() : c1 === c2;
  }
  createReqStudent(){
    let reqStudent: ReqStudent;
    let currentStudentUser = new StudentUser(JSON.parse(localStorage.getItem('currentStudentUser')));
    reqStudent = new ReqStudent();
    reqStudent.setReqStudent(currentStudentUser.getStudentUserId(), currentStudentUser.getStudentUserStudentNumber(), currentStudentUser.getStudentUserCourse(), currentStudentUser.getStudentUserFullNameLF());
    return reqStudent;
  }
  onSubmit(){
    //reqResponse stores pm_id not professor
    this.submitted = true;
    let responses: ReqResponse[] = [];
    let response: ReqResponse;
    let professor: Professor;
    professor = new Professor(this.addPanelMemberForm.value.professor);
    //check if this professor exists    
    response = new ReqResponse();
    response.setResponseObject(professor.getProfessorIsPanelMemberUser(), professor.getProfessorFullName(), null, null, null, null);
    responses.push(response);
    let reqStudent = new ReqStudent(this.createReqStudent());

    this.requestService.addACRequest(
      reqStudent, //reqStudent 
      responses,
      new Date(),
      null, //is_approved
      "add",
      this.addPanelMemberForm.value.role,
      this.addPanelMemberForm.value.message,
      null,
      null,
      professor.getProfessorFullName() 
    ).subscribe((addedRequest)=>{
      if(addedRequest){
        console.log("Request Successfully made!");
        alert('Request Successfully made.');
        this.goToRequestList();
      }
      else{
        alert('There was an error in submitting the request.');
      }
    })
  }
  isAllowedToAddPM(){
    //check if role is vacant
    //check if the prof has already a role in
    //either filter the <option>s or the pmProfessors
    //Don't need to work on this now 
  }
  goToMyPanelList(){
    this.router.navigate(['/student/my-panel']);
  }
  goToRequestList(){
    this.router.navigate(['/student/requests']);
  }
}
 