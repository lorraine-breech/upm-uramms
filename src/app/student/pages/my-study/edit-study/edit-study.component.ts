import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Study } from 'src/app/shared/models/study';
import { TouchSequence } from 'selenium-webdriver';
import { StudentUserService } from 'src/app/shared/services/student-user.service';
import { FileUploader } from 'ng2-file-upload';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudyService } from 'src/app/shared/services/study.service';

@Component({
  selector: 'app-edit-study',
  templateUrl: './edit-study.component.html',
  styleUrls: ['./edit-study.component.css']
})

export class EditStudyComponent implements OnInit {
  editStudyForm: FormGroup;
  private currentStudy: Study;
  private updatedStudy: Study;
  private url = 'api/upload';
  private isUploaded = false;
  private isFileAdded = false;

  private uploadedFileName: string;
  private originalFileName: string;
  private submitted = false;
  public uploader: FileUploader = new FileUploader({url: this.url, itemAlias: 'file'});
 
  constructor(
    public router: Router,
    public studentUserService: StudentUserService,
    public studyService: StudyService,
    public formBuilder: FormBuilder 
  ) { 
    this.editStudyForm = formBuilder.group({
      title: null,
      abstract: null
    });
  }

  ngOnInit() { 
    this.currentStudy = this.studentUserService.getLoggedInStudentUserStudy();
    this.editStudyForm.setValue({
      title: this.currentStudy.getStudyTitle(),
      abstract: this.currentStudy.getStudyDescription()
    });
    this.uploader.onAfterAddingFile = (file) => { 
      file.withCredentials = false; 
      this.isFileAdded = true;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded:', item, status, response);
      if (status === 200) {
        this.uploadedFileName = JSON.parse(response).uploadName;
        this.originalFileName = JSON.parse(response).originalName;
        console.log(this.uploadedFileName);
        this.isUploaded = true;
        //this.addStudy();
      }  
      
    };
  }
  onSubmit(){
    this.submitted = true;
    let isStudyChanged = false;
    this.updatedStudy = new Study(this.currentStudy);

    if(this.editStudyForm.value.title !== this.currentStudy.getStudyTitle()){
      this.updatedStudy.setStudyTitle(this.editStudyForm.value.title);
      isStudyChanged = true;
    }
    
    if(this.editStudyForm.value.abstract !== this.currentStudy.getStudyDescription()){
      this.updatedStudy.setStudyDescription(this.editStudyForm.value.abstract);
      isStudyChanged = true;
    }
    
    if(this.isFileAdded == true){
      //upload new file
      this.uploader.uploadAll();
      //delete old file after new file is successfully uploaded
      if(this.isUploaded == true){
        this.studyService.deleteFile(this.currentStudy.getStudyPaperProposal()).subscribe();
      }
    }


    if(isStudyChanged == true){
      this.updateStudy();
    }
  }

  updateStudy(){

  }
  gotoMyStudy(){
    this.router.navigate(['/student/my-study']);
  }
}
