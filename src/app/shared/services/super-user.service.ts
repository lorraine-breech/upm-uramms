
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
//import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SuperUser } from '../models/user-super';

@Injectable()
export class SuperUserService {
  result: SuperUser[];
  private superUsersUrl = "api/superusers";
  private createSuperUserUrl = "api/createSuperUser";

  constructor( private _http: HttpClient ) { }

  addSuperUser(
    fname,
    lname,
    mname,
    emp_num,
    position,
    title,
    dept,
    college,
    user_type,
    user_username,
    user_password
  ){
    const url = this.createSuperUserUrl;
    return this._http.post<SuperUser>(url, {
      fname,
      lname,
      mname,
      emp_num,
      position,
      title,
      dept,
      college,
      user_type,
      user_username,
      user_password
    }).pipe(
      tap(data => {
        return data;
      }),
      catchError(this.handleError<SuperUser>(`create super user error superUser_name=${fname}`))
    )
  }
  
  getSuperUsers (): Observable<SuperUser[]> {
    return this._http.get<SuperUser[]>(this.superUsersUrl)
      .pipe(
        tap(_ => this.log('fetched superUsers')),
        catchError(this.handleError('getSuperUsers', []))
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
