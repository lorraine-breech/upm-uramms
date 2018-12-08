import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    private selectedRequest: any = undefined;
    setSelectedRequest(selectedRequest:any){
        this.selectedRequest = selectedRequest;
    }
    getSelectedRequest():any{
        return this.selectedRequest;
    }
}