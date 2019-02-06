import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Course } from '../models/course';
import { Department } from '../models/department';
import { College } from '../models/college';

@Injectable()
export class CourseService {

  private coursesUrl = "api/courses";
  private departmentsUrl = "api/departments";
  private collegesUrl = "api/colleges";

  constructor(private _http: HttpClient) { }

  getCollege(colId): Observable<College>{
    let params = new HttpParams().set('id', colId);

    return this._http.get<College>(this.collegesUrl,{
      params: params
    }).pipe(
        tap(_ =>this.log('fetched college')),
        catchError(this.handleError<College>(`getCollege colId=${colId}`))
    );
  }
  getDepartmentByName(deptName): Observable<Department>{
    let params = new HttpParams().set('name',deptName);

    return this._http.get<Department>(this.departmentsUrl,{
      params: params
    }).pipe(
        tap(_ =>this.log('fetched department')),
        catchError(this.handleError<Department>(`getDepartment deptName=${deptName}`))
    );
  }
  getDepartment(deptId): Observable<Department>{
    let params = new HttpParams().set('id',deptId);

    return this._http.get<Department>(this.departmentsUrl,{
      params: params
    }).pipe(
        tap(_ =>this.log('fetched department')),
        catchError(this.handleError<Department>(`getDepartment deptId=${deptId}`))
    );
  }
  getDepartments(): Observable<Department[]>{
    return this._http.get<Department[]>(this.departmentsUrl)
      .pipe(
          tap(_ =>this.log('fetched departments')),
          catchError(this.handleError<Department[]>(`getDepartments`, [] ))
      );
  }

  getCourses(): Observable<Course[]>{
    return this._http.get<Course[]>(this.coursesUrl)
      .pipe(
          tap(_ =>this.log('fetched courses')),
          catchError(this.handleError<Course[]>(`getCourses`, [] ))
      );
  }
  getCourse(courseName): Observable<Course>{
    let params = new HttpParams().set('courseName',courseName);

    return this._http.get<Course>(this.coursesUrl,{
      params: params
    }).pipe(
        tap(_ =>this.log('fetched course')),
        catchError(this.handleError<Course>(`getCourse courseName=${courseName}`))
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