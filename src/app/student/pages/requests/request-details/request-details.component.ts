import { Component, OnInit } from '@angular/core';
import { DataService } from '../request-list/dataService';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  selectedRequest:any;
  private is_psrequest: boolean = false;
  private is_parequest: boolean = false;
  private is_acrequest: boolean = false;
  private is_cpreqeust: boolean = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.is_psrequest=true;

  }

}
