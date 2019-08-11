import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PanelMemberUser } from '../models/user-panel-member';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable()
export class PanelMemberUserService {
  result: PanelMemberUser[];
  private createPanelMemberUserUrl = "api/createPanelMemberUser";
  private panelMembersUrl = "api/panelmemberusers";

  constructor( private _http: HttpClient ) { }
 
  deletePanelMemberUser(panelMemberId: string): Observable<{}>{
    const url = `${this.panelMembersUrl}/${panelMemberId}`; 
    return this._http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('error deleting Study! '))
      );
  }

  updatePanelMemberUser(panelMemberUser: PanelMemberUser): Observable<any>{
    return this._http.put(this.panelMembersUrl, panelMemberUser, httpOptions).pipe(
      tap(_ => this.log(`updated panelMemberUser id=${panelMemberUser.getPanelMemberUserId()}`)),
      catchError(this.handleError<any>('error updating Panel Member User! '))
    );
  }

  getPanelMemberUser(panelMemberUserId: string): Observable<PanelMemberUser>{
    let params = new HttpParams().set('id', panelMemberUserId);

    return this._http.get<PanelMemberUser>(this.panelMembersUrl,{
      params: params
    }).pipe(
        tap(_ =>this.log('fetched panel member user by id')),
        catchError(this.handleError<PanelMemberUser>(`error panelMemberID=${panelMemberUserId}!`))
    );
  }
 

  addPanelMemberUser(
    pm_prof_id,
    pm_full_name
  ){
    const url = this.createPanelMemberUserUrl;
    return this._http.post<PanelMemberUser>(url, {
      pm_prof_id,
      pm_full_name
    }).pipe(
      tap(data => {
        return data;
      }),
      catchError(this.handleError<PanelMemberUser>(`create panel member user error panel_member_prof_id=${pm_prof_id}`))
    )

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
