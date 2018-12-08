import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-panel-member-request',
  templateUrl: './add-panel-member-request.component.html',
  styleUrls: ['./add-panel-member-request.component.css']
})
export class AddPanelMemberRequestComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  goToMyPanelList(){
    this.router.navigate(['/student/my-panel']);
  }
  onSubmit(){
    
  }
}
