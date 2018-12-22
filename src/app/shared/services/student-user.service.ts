
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { StudentUser } from '../models/user-student';

@Injectable()
export class StudentUserService {
  result: StudentUser[];
  private studentUsersUrl = "api/studentusers";
  private courseName: string; 

  constructor( private _http: HttpClient ) { }

  getStudentUsers (): Observable<StudentUser[]> {
    return this._http.get<StudentUser[]>(this.studentUsersUrl)
      .pipe(
        tap(_ => this.log('fetched studentUsers')),
        catchError(this.handleError('getStudentUsers', []))
      );
  }
/*
  getCourseName (courseID: string): Observable<> {
    return this._http.get<>(this.studentUsersUrl)
      .pipe(
        tap(_ => this.log('fetched studentUsers')),
        catchError(this.handleError('getStudentUsers', []))
      );
  }
*/
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
