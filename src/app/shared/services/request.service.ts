import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { catchError, map, tap } from 'rxjs/operators';
import { ACPanelMemberRequest } from "../models/request-add-change-pm";
import { ChangePanelMemberRequestComponent } from "../../student/pages/my-panel/change-panel-member-request/change-panel-member-request.component";
import { ChangeProposalRequest } from "../models/request-change-proposal";
import { PresentationScheduleRequest } from "../models/request-presentation-schedule";
import { PaperApprovalRequest } from "../models/request-paper-approval";
import { ReqResponse } from 'src/app/shared/models/request-response';
import { PanelMemberUser } from "../models/user-panel-member";
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class RequestService {
    private acRequestsUrl = "api/acrequests";
    private cpRequestsUrl = "api/cprequests";
    private paRequestsUrl = "api/parequests";
    private psRequestsUrl = "api/psrequests";
    private currentPanelMember: PanelMemberUser;
    private currentRole: string;
    private selectedRequest: any = undefined;

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
    setSelectedRequest(selectedRequest:any){
        this.selectedRequest = selectedRequest;
    }
    getSelectedRequest():any{
        return this.selectedRequest;
    }
    addACRequest(
        acrequest_type: string,
        acrequest_stud_id: string,
        acrequest_role_type: string,
        acrequest_stud_remarks: string,
        acrequest_change_from: string,
        acrequest_change_to: string,
        acrequest_responses: ReqResponse[], 
        acrequest_date_created: Date,
        acrequest_is_approved: boolean,
      ){
        const url = this.acRequestsUrl;
    
        return this._http.post<ACPanelMemberRequest>(url, {
            acrequest_type,
            acrequest_stud_id,
            acrequest_role_type,
            acrequest_stud_remarks,
            acrequest_change_from,
            acrequest_change_to,
            acrequest_responses,
            acrequest_date_created,
            acrequest_is_approved,
        }).pipe(
          tap(data => {
            return data;
          }),
          catchError(this.handleError<ACPanelMemberRequest>(`create acrequest error =${acrequest_stud_id}`))
        )
    }
    addPARequest(
        parequest_stud_id,
        parequest_paper_type,
        parequest_presentation_id,
        parequest_responses,
        parequest_revisions,
        parequest_date_created,
        parequest_level,
      ){
        const url = this.paRequestsUrl;
    
        return this._http.post<PaperApprovalRequest>(url, {
            parequest_stud_id,
            parequest_paper_type,
            parequest_presentation_id, 
            parequest_responses,
            parequest_revisions,
            parequest_date_created,
            parequest_level,
        }).pipe(
          tap(data => { 
            return data;
          }),
          catchError(this.handleError<PaperApprovalRequest>(`create parequest error =${parequest_stud_id}`))
        )
    } 
    addPSRequest(
        psrequest_stud_id: string,
        psrequest_pres_type: string,
        psrequest_pres_date: Date,
        psrequest_pres_time_start: string,
        psrequest_pres_time_end: string,
        psrequest_pres_place:string,
        psrequest_responses: ReqResponse[],
        psrequest_date_created: Date,
        psrequest_is_approved: boolean,
      ){
        const url = this.psRequestsUrl;
    
        return this._http.post<PresentationScheduleRequest>(url, {
            psrequest_stud_id,
            psrequest_pres_type,
            psrequest_pres_date,
            psrequest_pres_time_start,
            psrequest_pres_time_end,
            psrequest_pres_place,
            psrequest_responses,
            psrequest_date_created,
            psrequest_is_approved, 
        }).pipe(
          tap(data => {
            return data;
          }),
          catchError(this.handleError<PresentationScheduleRequest>(`create psrequest error =${psrequest_stud_id}`))
        )
    }

    deletePSRequest(requestId: string): Observable<{}>{
        const url = `${this.psRequestsUrl}/${requestId}`; 
        return this._http.delete(url, httpOptions)
            .pipe(
                catchError(this.handleError('deleteStudy'))
            );
    }
    deletePARequest(requestId: string): Observable<{}>{
        const url = `${this.paRequestsUrl}/${requestId}`; 
        return this._http.delete(url, httpOptions)
            .pipe(
                catchError(this.handleError('deleteStudy'))
            );
    }
    deleteCPRequest(requestId: string): Observable<{}>{
        const url = `${this.cpRequestsUrl}/${requestId}`; 
        return this._http.delete(url, httpOptions)
            .pipe(
                catchError(this.handleError('deleteStudy'))
            );
    }
    deleteACRequest(requestId: string): Observable<{}>{
        const url = `${this.acRequestsUrl}/${requestId}`; 
        return this._http.delete(url, httpOptions)
            .pipe(
                catchError(this.handleError('deleteStudy'))
            );
    }   
         
    getPSRequests(studId: string): Observable<PresentationScheduleRequest[]> {
        let params = new HttpParams().set('id', studId);
    
        return this._http.get<PresentationScheduleRequest[]>(this.psRequestsUrl,{
          params: params
        }).pipe(
            tap(_ =>this.log('fetched psrequest by id')),
            catchError(this.handleError('getPSRequest studentID', []))
        );
    }
    getPARequests(studId: string): Observable<PaperApprovalRequest[]> {
        let params = new HttpParams().set('id', studId);
    
        return this._http.get<PaperApprovalRequest[]>(this.paRequestsUrl,{
          params: params
        }).pipe(
            tap(_ =>this.log('fetched parequest by id')),
            catchError(this.handleError('getCPRequest studentID', []))
        );
    }
    getCPRequests(studId: string): Observable<ChangeProposalRequest[]> {
        let params = new HttpParams().set('id', studId);
    
        return this._http.get<ChangeProposalRequest[]>(this.cpRequestsUrl,{
          params: params
        }).pipe(
            tap(_ =>this.log('fetched cprequest by id')),
            catchError(this.handleError('getCPRequest studentID', []))
        );
    }

    getACRequests(studId: string): Observable<ACPanelMemberRequest[]> {
      let params = new HttpParams().set('id', studId);

        return this._http.get<ACPanelMemberRequest[]>(this.acRequestsUrl,{
          params: params
        }).pipe(
            tap(_ => this.log('fetched acrequests')),
            catchError(this.handleError('getACRequest studentID', []))
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
  