import { Component, OnInit } from '@angular/core';
import { DataService } from '../request-list/dataService';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {
  selectedRequest:any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.selectedRequest = this.dataService.getSelectedRequest();
  }

}
