import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-change-proposal-request',
  templateUrl: './change-proposal-request.component.html',
  styleUrls: ['./change-proposal-request.component.css']
})
export class ChangeProposalRequestComponent implements OnInit {
  private addCPRequestForm: FormGroup;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.addCPRequestForm = formBuilder.group({
      part: null,
      from: null, //value depends on the value of part
      to: null,
      reason: null,
      rstatus: null
    });

  }

  ngOnInit() {
    
    this.addCPRequestForm.setValue({

    });

    
  }
  updateFrom(){
    if(this.addCPRequestForm.value.part == "Title"){

    }
    else if(this.addCPRequestForm.value.part == "Objectives"){
      
    }
    else if(this.addCPRequestForm.value.part == "Methodology"){
      
    }
    else if(this.addCPRequestForm.value.part == "Others"){
      
    }
    else{
      console.log("Needs Fixing");
    }
    

  }
  onSubmit(){

  }
  gotoMyStudy(){
    this.router.navigate(['/student/my-study']);
  }
 
}
