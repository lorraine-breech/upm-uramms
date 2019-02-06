
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { OtherUser } from '../models/user-other';

@Injectable()
export class OtherUserService {
  result: OtherUser[];
  private createOtherUserUrl = "api/createOtherUser";
  private otherUsersUrl = "api/otherUsers";

  constructor( private _http: HttpClient ) { }
  getOtherUser(profOtherUserId){
    let params = new HttpParams().set('id',profOtherUserId);

    return this._http.get<OtherUser>(this.otherUsersUrl,{
      params: params
    }).pipe(
        tap(_ =>this.log('fetched other user')),
        catchError(this.handleError<OtherUser>(`getOtherUser otherId=${profOtherUserId}`))
    );
  }
  addOtherUser(
    other_prof_id,
    other_type,
    other_is_panel_member
  ){
    const url = this.createOtherUserUrl;
    return this._http.post<OtherUser>(url, {
        other_prof_id,
        other_type,
        other_is_panel_member
    }).pipe(
      tap(data => {
        return data;
      }),
      catchError(this.handleError<OtherUser>(`create other user error other_prof_id=${other_prof_id}`))
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
