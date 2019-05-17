import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentUserService } from '../../../../shared/services/student-user.service';
import { Panel } from '../../../../shared/models/panel';
import { Course } from '../../../../shared/models/course';
import { Department } from '../../../../shared/models/department';
import { College } from '../../../../shared/models/college';
import { CourseService } from '../../../../shared/services/course.service';
import { StudentUser } from '../../../../shared/models/user-student';
import { ProfessorService } from '../../../../shared/services/professor.service';
import { Professor } from '../../../../shared/models/professor';
 
@Component({
  selector: 'edit-add-student-form', 
  templateUrl: './edit-student-form.component.html', 
  styleUrls: ['./edit-student-form.component.css']
})
export class EditStudentFormComponent implements OnInit {

  editStudentUserForm: FormGroup;
  submitted = false;
  private currentStudentUser: StudentUser;
  private updatedStudentUser: StudentUser;
  private professorPanelMemberUsers: Professor[];
  private newAdviser: Professor = null;
  private currentAdviser: Professor = null;
  private currentPanel: Panel;
 
  private courses: Course[];
  private course: Course = null;
  private department: Department = null;
  private college: College = null;
  
  private panel = new Panel();
   
  constructor(
    public router: Router, 
    private formBuilder: FormBuilder,
    private studentUserService: StudentUserService,
    private professorService: ProfessorService,
    private courseService: CourseService 
  ) { 
    this.editStudentUserForm = formBuilder.group({
      firstName: null,
      middleName: null,
      lastName: null,
      studentNumber: null,
      year: null,
      course: null,
      adviser: null  
    });
  }
 
  ngOnInit() {
    this.currentStudentUser = this.studentUserService.getCurrentStudentUser();
    this.getCurrentAdviser(this.currentStudentUser.getStudentUserPanel());
    
    this.getProfessorPanelMemberUsers();
    this.getCourses();
  }

  onSubmit(){
    this.submitted = true;
    this.updatedStudentUser= new StudentUser(this.currentStudentUser);

    if(this.editStudentUserForm.value.firstName !== null) 
    this.updatedStudentUser.setStudentUserFname(this.editStudentUserForm.value.firstName);
    
    if(this.editStudentUserForm.value.middleName !== null) 
    this.updatedStudentUser.setStudentUserMname (this.editStudentUserForm.value.middleName);

    if(this.editStudentUserForm.value.lastName !== null) 
    this.updatedStudentUser.setStudentUserLname(this.editStudentUserForm.value.lastName);

    if(this.editStudentUserForm.value.studentNumber !== null) 
    this.updatedStudentUser.setStudentUserStudNum(this.editStudentUserForm.value.studentNumber);

    if(this.editStudentUserForm.value.year !== null) 
    this.updatedStudentUser.setStudentUserYear(this.editStudentUserForm.value.year);

    if(this.editStudentUserForm.value.adviser !== this.currentStudentUser.getStudentUserAdviser()){
      //change adviser, panel:adviserId only 
      this.newAdviser = this.editStudentUserForm.value.adviser; //returns an object 
      this.updatedStudentUser.setStudentUserAdviser(this.newAdviser.getProfessorFullName());
      this.setNewAdviserIdInPanel();
    } 

    if(this.editStudentUserForm.value.course !== this.currentStudentUser.getStudentUserCourse()){
      //change course, dept and college
      this.updateCourseDeptColStudent();
      
    } 
    else{
      this.updateStudentUser();
    }
  }

  updateCourseDeptColStudent(){
    //setUpdateStudentUser() and updateStudentUser is called within getCourse()
    this.getCourse(this.editStudentUserForm.value.course);
  }
  compareFn(c1: Professor, c2: Professor): boolean {
    return c1 && c2 ? c1.getProfessorId() === c2.getProfessorId() : c1 === c2;
  }
  getCurrentAdviser(currPanel: Panel){
    let currentPanel = new Panel(currPanel);
    console.warn("CURRENT ADVISER ID: "+ currentPanel.getPanelAdviserId());

    this.professorService.getProfessor(currentPanel.getPanelAdviserId())
      .subscribe(res=>{
        this.currentAdviser = new Professor(res);
        console.warn("res: "+ res);
        console.warn("CURRENT ADVISER: "+ this.currentAdviser.getProfessorFullName());
        
        this.editStudentUserForm.setValue({
          firstName: this.currentStudentUser.getStudentUserFirstName(),
          middleName: this.currentStudentUser.getStudentUserMiddleName(),
          lastName: this.currentStudentUser.getStudentUserLastName(),
          studentNumber: this.currentStudentUser.getStudentUserStudentNumber(),
          year: this.currentStudentUser.getStudentUserYear(),
          course: this.currentStudentUser.getStudentUserCourse(), //string
          adviser: this.currentAdviser 
        });
      });
    
  } 
  getCourses(){
    this.courseService.getCourses()
      .subscribe(res=>{
        console.warn(res); 
        this.courses = res.map(course => new Course(course)); 
      });
  }

  updateStudentUser(){
    this.studentUserService.updateStudentUser(this.updatedStudentUser)
      .subscribe(()=>this.gotoStudentsList());
  }

  setNewAdviserIdInPanel(){
    this.panel = new Panel(this.currentStudentUser.getStudentUserPanel()); //to retain other field values
    let profID = this.newAdviser.getProfessorId();
    this.panel.setPanelAdviserId(profID); //set AdviserId 
    this.updatedStudentUser.setStudentUserPanel(this.panel);
  }
  
  getProfessorPanelMemberUsers(){
    this.professorService.getProfessorPanelMemberUsers()
      .subscribe( res=>{
        console.warn(res); 
        this.professorPanelMemberUsers = res.map(user => new Professor(user)); 
      });
  }
  getCourse(courseName: string){
    this.courseService.getCourse(courseName)
        .subscribe(res =>{
          console.warn(res); 
          this.course = new Course(res);
          this.getDepartment(this.course.getCourseDeptId());        
        });
  }

  getDepartment(deptId: string){
    this.courseService.getDepartment(deptId)
        .subscribe(res =>{
          console.warn(res); 
          this.department = new Department(res);
          this.getCollege(this.department.getDeptColId());
        });
  }

  getCollege(colId: string){
    this.courseService.getCollege(colId)
        .subscribe(res =>{
          console.warn(res); 
          this.college = new College(res);
          this.setUpdatedStudentUser();
          this.updateStudentUser();
        });
  }

  setUpdatedStudentUser(){
    this.updatedStudentUser.setStudentUserCourse(this.course.getCourseName());
    this.updatedStudentUser.setStudentUserDepartment(this.department.getDeptName());
    this.updatedStudentUser.setStudentUserCollege(this.college.getColName());
    
  }
  gotoStudentsList(){
    this.router.navigate(['/super/students']);
  }
}
