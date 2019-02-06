
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PanelMemberUser } from '../models/user-panel-member';

@Injectable()
export class PanelMemberUserService {
  result: PanelMemberUser[];
  private createPanelMemberUserUrl = "api/createPanelMemberUser";

  constructor( private _http: HttpClient ) { }

  addPanelMemberUser(
    pm_prof_id
  ){
    const url = this.createPanelMemberUserUrl;
    return this._http.post<PanelMemberUser>(url, {
      pm_prof_id
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
