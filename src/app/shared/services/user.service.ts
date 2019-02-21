import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  users: User[];
  user: User;
  private usersUrl = "api/users";
  private loginUrl = "api/login";
  private currentUser: User;

  constructor(private _http: HttpClient) { }
/*
  getUsers() {
    return this._http.get("/api/users").pipe(
      map(result => this.result = result)
    );  
  }
*/
  getCurrentUser(){
    return this.currentUser;
  }      

  logIn(username: string, password: string): Observable<User> {
    const url = this.loginUrl;
    let body = {
        user_username: username,
        user_password: password
    }

    return this._http.post(url, body).pipe(
        tap(data => {
            const outcome = data ? 'fetched user ' + username : 'did not find user ' + username;
            if (data) {
                this.currentUser = new User(data);
                //localStorage.setItem('currentUser', JSON.stringify(data));
                //this.cookieService.set('currentUser', this.currentUser.getUserId());
            }
            return data;
        }),
        catchError(this.handleError<any>(`logIn user_username=${username}`))
    );
  }
  getUsers (): Observable<User[]> {
    return this._http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(this.handleError('getUsers', []))
      );
  }


  getUser(user_type_id): Observable<User>{
    let params = new HttpParams().set('id', user_type_id);

    return this._http.get<User>(this.usersUrl,{
      params: params
    }).pipe(
        tap(_ =>this.log('fetched users')),
        catchError(this.handleError<User>(`getUser user_type_id=${user_type_id}`))
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