import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { catchError, map, tap } from 'rxjs/operators';
import { ACPanelMemberRequest } from "../models/request-add-change-pm";
import { ChangePanelMemberRequestComponent } from "../../student/pages/my-panel/change-panel-member-request/change-panel-member-request.component";
import { ChangeProposalRequest } from "../models/request-change-proposal";
import { PresentationScheduleRequest } from "../models/request-presentation-schedule";
import { PaperApprovalRequest } from "../models/request-paper-approval";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class RequestService {
    private acRequestsUrl = "api/acrequests";
    private cpRequestsUrl = "api/cprequests";
    private paRequestsUrl = "api/parequests";
    private psRequestsUrl = "api/psrequests";


    constructor( private _http: HttpClient ) { }
    getPSRequest (studId: string): Observable<PresentationScheduleRequest> {
        let params = new HttpParams().set('id', studId);
    
        return this._http.get<PresentationScheduleRequest>(this.psRequestsUrl,{
          params: params
        }).pipe(
            tap(_ =>this.log('fetched psrequest by id')),
            catchError(this.handleError<PresentationScheduleRequest>(`getPSRequest studentID=${studId}`))
        );
    }
    getPARequest (studId: string): Observable<PaperApprovalRequest> {
        let params = new HttpParams().set('id', studId);
    
        return this._http.get<PaperApprovalRequest>(this.paRequestsUrl,{
          params: params
        }).pipe(
            tap(_ =>this.log('fetched parequest by id')),
            catchError(this.handleError<PaperApprovalRequest>(`getCPRequest studentID=${studId}`))
        );
    }
    getCPRequest (studId: string): Observable<ChangeProposalRequest> {
        let params = new HttpParams().set('id', studId);
    
        return this._http.get<ChangeProposalRequest>(this.cpRequestsUrl,{
          params: params
        }).pipe(
            tap(_ =>this.log('fetched cprequest by id')),
            catchError(this.handleError<ChangeProposalRequest>(`getCPRequest studentID=${studId}`))
        );
    }

    //!? how to get more than one but not all
    getACRequests (): Observable<ACPanelMemberRequest[]> {
        return this._http.get<ACPanelMemberRequest[]>(this.acRequestsUrl)
          .pipe(
            tap(_ => this.log('fetched studentUsers')),
            catchError(this.handleError('getStudentUsers', []))
        
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
  