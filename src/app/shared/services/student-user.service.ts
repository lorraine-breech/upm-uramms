import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { StudentUser } from '../models/user-student';
import { Panel } from '../models/panel';
import { Study } from '../models/study';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentUserService {
  result: StudentUser[];
  private studentUsersUrl = "api/studentusers";
  private createStudentUserUrl = "api/createStudentUser";
  private courseName: string; 
  private currentStudentUser: StudentUser;
  private loggedInStudentUser: StudentUser;
  private loggedInStudentUserStudy: Study;
  private loggedInStudentUserPanel: Panel;

  constructor( private _http: HttpClient ) { }
  
  setLoggedInStudentUserStudy(study: Study){
    this.loggedInStudentUserStudy = study;
  } 
  setLoggedInStudentUserPanel(panel: Panel){
    this.loggedInStudentUserPanel = panel;
  }
  setLoggedInStudentUser(studentUser: StudentUser){
    this.loggedInStudentUser = studentUser;
  }

  getLoggedInStudentUserStudy(){
    return this.loggedInStudentUserStudy;
  } 
  getLoggedInStudentUserPanel(){
    return this.loggedInStudentUserPanel;
  }
  getLoggedInStudentUser(){
    return this.loggedInStudentUser;
  }

  setCurrentStudentUser(currStudentUser: StudentUser){
    this.currentStudentUser = currStudentUser;
  }
  getCurrentStudentUser(){
    return this.currentStudentUser;
  }
  
  getStudentUser(studentUserId: string): Observable<StudentUser>{
    let params = new HttpParams().set('id', studentUserId);

    return this._http.get<StudentUser>(this.studentUsersUrl,{
      params: params
    }).pipe(
        tap(_ =>this.log('fetched student user')),
        catchError(this.handleError<StudentUser>(`getUser _id=${studentUserId}`))
    );
  }

  getStudentUsers (): Observable<StudentUser[]> {
    return this._http.get<StudentUser[]>(this.studentUsersUrl)
      .pipe(
        tap(_ => this.log('fetched studentUsers')),
        catchError(this.handleError('getStudentUsers', []))
      );
  }
  //why pass object and noy just ID???? check other users as well
  
  deleteStudentUser(studentUser: StudentUser): Observable<{}>{
    const id = typeof studentUser === 'number'? studentUser : studentUser.getStudentUserId();
    const url = `${this.studentUsersUrl}/${id}`; // DELETE api/heroes/42
    return this._http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteStudent'))
      );
  }
  
  updateStudentUser(studentUser: StudentUser): Observable<any>{
    return this._http.put(this.studentUsersUrl, studentUser, httpOptions).pipe(
      tap(_ => this.log(`updated studentUser id=${studentUser.getStudentUserId()}`)),
      catchError(this.handleError<any>('updateStudentUser'))
    );
  }
  
  addStudentUser(
    fname,
    mname,
    lname,
    stud_num,
    year,
    course,
    dept,
    college,
    panel: Panel,
    adviser,
    status,
    user_type,
    user_username,
    user_password
  ){
    const url = this.createStudentUserUrl;

    return this._http.post<StudentUser>(url, {
      fname,
      mname,
      lname,
      stud_num,
      year,
      course,
      dept,
      college,
      panel,
      adviser,
      status,
      user_type,
      user_username,
      user_password
    }).pipe(
      tap(data => {
        return data;
      }),
      catchError(this.handleError<StudentUser>(`create student user error student_name=${fname}`))
    )
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
