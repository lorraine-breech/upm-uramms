import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { StudyService } from '../../../../shared/services/study.service';
import { StudentUserService } from '../../../../shared/services/student-user.service';
import { StudentUser } from '../../../../shared/models/user-student';

@Component({
  selector: 'app-add-study',
  templateUrl: './add-study.component.html',
  styleUrls: ['./add-study.component.css']
})
export class AddStudyComponent implements OnInit {
  
  addStudyForm: FormGroup;
  submitted = false;
  url = 'api/upload';
  isUploaded = false;
  isFileAdded = false;
  uploadedFileName: string;
  originalFileName: string;
  loggedInStudentUser: StudentUser;
  study_status = "Proposal Writing";
  public uploader: FileUploader = new FileUploader({url: this.url, itemAlias: 'file'});

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private studyService: StudyService,
    private studentUserService: StudentUserService 
  ) { 
    this.addStudyForm = formBuilder.group({
      title: null,
      abstract: null
    });
  }

  ngOnInit() {
    this.loggedInStudentUser = new StudentUser(this.studentUserService.getLoggedInStudentUser());
    this.uploader.onAfterAddingFile = (file) => { 
      file.withCredentials = false; 
      this.isFileAdded = true;
    };
     
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded:', item, status, response);
      this.uploadedFileName = JSON.parse(response).uploadName;
      this.originalFileName = JSON.parse(response).originalName;
      console.log(this.uploadedFileName);
      this.addStudy();
    };
  }
  onSubmit(){
    this.submitted = true;
    
    if(this.addStudyForm.value.title !== null && this.addStudyForm.value.abstract !==null && this.isFileAdded == true){
      this.uploader.uploadAll(); //add study inside the onCompleteItem event
    }
    else{
      alert('Please make sure that the inputs are not null and the file has been added.');
    }
  
  }
  addStudy(){
    this.studyService.addStudy(
      this.addStudyForm.value.title,
      this.addStudyForm.value.abstract,
      this.uploadedFileName,
      null,
      this.study_status,
      this.loggedInStudentUser.getStudentUserId()
    ).subscribe(updatedStudentUser=>{
      if(updatedStudentUser){
        console.log(updatedStudentUser);
        alert('Added Study successfully');
        this.updateStudentUser();
      }
      else{
        alert('Error: Something went wrong');
      }
    });
  }  
  updateStudentUser(){
    this.studentUserService.getStudentUser(this.loggedInStudentUser.getStudentUserId())
    .subscribe(res =>{
      this.studentUserService.setLoggedInStudentUser(res);
      this.gotoMyStudy();

    });
    
  }
  
  gotoMyStudy(){
    this.router.navigate(['/student/my-study']);
  }
}
