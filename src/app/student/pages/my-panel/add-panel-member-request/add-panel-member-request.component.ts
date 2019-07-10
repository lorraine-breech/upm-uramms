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
  onSubmit(){
    this.submitted = true;
    let response: ReqResponse;
    let professor: Professor;
    professor = new Professor(this.addPanelMemberForm.value.professor);
    //check if this professor exists    
    response.setResponseObject(professor.getProfessorId(), professor.getProfessorFullName(), null, null, null, null);
    this.requestService.addACRequest(
      "add",
      null,
      this.addPanelMemberForm.value.role,
      this.addPanelMemberForm.value.message,
      response,
      new Date(),
      null,
    ).subscribe((addedRequest)=>{
      if(addedRequest){

      }
      else{

      }
    })
  }
  goToMyPanelList(){
    this.router.navigate(['/student/my-panel']);
  }

}
 