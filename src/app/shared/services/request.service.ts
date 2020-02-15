import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { catchError, map, tap } from 'rxjs/operators';
import { ReqResponse } from 'src/app/shared/models/request-response';
import { PanelMemberUser } from "../models/user-panel-member";
import { UPMRequest } from "../models/request-upm";
import { ReqStudent } from "../models/request-student";
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 

@Injectable()
export class RequestService {
    private acRequestsUrl = "api/acrequests";
    private cpRequestsUrl = "api/cprequests";
    private paRequestsUrl = "api/parequests";
    private psRequestsUrl = "api/psrequests";
    private requestsUrl = "api/requests";
    private currentPanelMember: PanelMemberUser;
    private currentRole: string;
    private selectedRequest: any = undefined;
    private selectedRequestType: number; //1=psrequest, 2=parequest, 3=cprequest, 4 acrequest

    constructor( private _http: HttpClient ) { }

    setCurrentRole(role: string){
      this.currentRole = role;
    }
    getCurrentRole(){
      return this.currentRole;
    }
    setCurrentPMToChange(panelMember: PanelMemberUser){
      this.currentPanelMember = panelMember;
    } 
    getCurrentPMToChange(){
      return this.currentPanelMember; 
    }
    setSelectedRequest(selectedRequest: any){
        this.selectedRequest = selectedRequest;
    }
    getSelectedRequest():any{
        return this.selectedRequest;
    }
    setSelectedRequestType(selectedRequestType: number){
      this.selectedRequestType = selectedRequestType;
    }
    getSelectedRequestType():number{
        return this.selectedRequestType;
    }
    
    addPSRequest(
      student: ReqStudent,
      responses: ReqResponse[],
      date_created: Date,
      is_approved: boolean,
      psrequest_pres_type: string,
      psrequest_pres_date: Date,
      psrequest_pres_time_start: string,
      psrequest_pres_time_end: string,
      psrequest_pres_place:string,
      
    ){
      const url = this.psRequestsUrl;
  
      return this._http.post<UPMRequest>(url, {
          student,
          responses,
          date_created,
          is_approved, 
          psrequest_pres_type,
          psrequest_pres_date,
          psrequest_pres_time_start,
          psrequest_pres_time_end,
          psrequest_pres_place,
      }).pipe(
        tap(data => {
          return data;
        }),
        catchError(this.handleError<UPMRequest>(`create psrequest error =${student.getReqStudentFullNameLF()}`))
      )
  }
    addACRequest(
      student: ReqStudent,
      responses: ReqResponse[],
      date_created: Date,
      is_approved: boolean,
      acrequest_type: string,
      acrequest_role_type: string,
      acrequest_student_remarks: string,
      acrequest_change_from: string,
      acrequest_change_to: string,
      acrequest_add: string,
      ){
        const url = this.acRequestsUrl;
    
        return this._http.post<UPMRequest>(url, {
          student,
          responses,
          date_created,
          is_approved,   
          acrequest_type,
          acrequest_role_type,
          acrequest_student_remarks,
          acrequest_change_from,
          acrequest_change_to,
          acrequest_add
        }).pipe(
          tap(data => {
            return data;
          }),
          catchError(this.handleError<UPMRequest>(`create acrequest error =${student.getReqStudentFullNameLF()}`))
        )
    }
    addCPRequest(
      student: ReqStudent,
      responses: ReqResponse[], 
      date_created: Date,
      is_approved: boolean,
      cprequest_proposal_file_name: string,
      cprequest_part: string,
      cprequest_from: string,
      cprequest_to: string
    ){
      const url = this.cpRequestsUrl;
    
        return this._http.post<UPMRequest>(url, {
          student,
          responses,
          date_created,
          is_approved,   
          cprequest_proposal_file_name,
          cprequest_part,
          cprequest_from,
          cprequest_to,
        }).pipe(
          tap(data => { 
            return data;
          }),
          catchError(this.handleError<UPMRequest>(`create cprequest error =${student.getReqStudentFullNameLF()}`))
        )
    }
    addPARequest(
      student: ReqStudent,
      responses: ReqResponse[],
      date_created: Date,
      is_approved: boolean,
      parequest_paper_type,
      parequest_presentation_id,
      parequest_revisions,
      parequest_level,
      ){
        const url = this.paRequestsUrl;
    
        return this._http.post<UPMRequest>(url, {
          student,
          responses,
          date_created,
          is_approved,   
          parequest_paper_type,
          parequest_presentation_id, 
          parequest_revisions,
          parequest_level
        }).pipe(
          tap(data => { 
            return data;
          }),
          catchError(this.handleError<UPMRequest>(`create parequest error =${student.getReqStudentFullNameLF()}`))
        )
    } 
    

    deleteRequest(requestId: string): Observable<{}>{
        const url = `${this.requestsUrl}/${requestId}`; 
        return this._http.delete(url, httpOptions)
            .pipe(
                catchError(this.handleError('deleteRequest'))
            );
    }
    getRequestsByPMOtherID(pmOtherId: string): Observable<UPMRequest[]> {
      let params = new HttpParams().set('pm_other_id', pmOtherId);
  
      return this._http.get<UPMRequest[]>(this.requestsUrl,{
        params: params
      }).pipe(
          tap(_ =>this.log('fetched request by pm_other_id')),
          catchError(this.handleError('getRequests pmOtherID', []))
      );
  }
    getRequests(studId: string): Observable<UPMRequest[]> {
        let params = new HttpParams().set('id', studId);
    
        return this._http.get<UPMRequest[]>(this.requestsUrl,{
          params: params
        }).pipe(
            tap(_ =>this.log('fetched request by id')),
            catchError(this.handleError('err getRequests studentID', []))
        );
    }

    private log(message: string) {
        console.log(message);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
        
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
        
        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }

}
  