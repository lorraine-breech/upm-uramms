import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {

  constructor( public router: Router ) { }
  
  cancel() {
    this.gotoRequests();
  }
  
  save() {
    //this.crisis.name = this.editName;
    this.gotoRequests();
  }
  
  
  gotoRequests(){
    this.router.navigate(['/student/requests/request-list']);
  }
  
  ngOnInit() {
  }

}
