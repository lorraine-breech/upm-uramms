import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Study } from '../models/study';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable()
export class StudyService {

  private studiesUrl = "api/studies";
  private deleteUploadedFileUrl = "api/deleteuploadedfile";
  private uploadedFilesUrl = "api/uploadedfiles";
  constructor(private _http: HttpClient) { }
  /*
  deleteFile(fileName: string): Observable<{Study}>{
    const url = this.deleteUploadedFileUrl;

    
  }
  */
 
  deleteStudy(studyId: string): Observable<{}>{
    const url = `${this.studiesUrl}/${studyId}`; 
    return this._http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteStudy'))
      );
  }

  deleteFile(fileName: string): Observable<{}>{
    let httpParams = new HttpParams().set('name', fileName);
    let options = { params: httpParams };
  
    return this._http.delete(this.uploadedFilesUrl, options, )
      .pipe(
        catchError(this.handleError('deleteFile'))
      );
  }

  getStudy(studyId: string): Observable<Study>{
    let params = new HttpParams().set('id', studyId);
    
    return this._http.get<Study>(this.studiesUrl,{
      params: params
    }).pipe(
        tap(_ =>this.log('fetched study')),
        catchError(this.handleError<Study>(`getStudy studyId=${studyId}`))
    );
  } 
  
  addStudy(
    title,
    description,
    paper_proposal,
    paper_manuscript,
    study_status,
    studentId
  ){
    const url = this.studiesUrl;

    return this._http.post<Study>(url, {
        title,
        description,
        paper_proposal,
        paper_manuscript,
        study_status,
        studentId
    }).pipe(
      tap(data => {
        return data;
      }),
      catchError(this.handleError<Study>(`create study error study_title=${title}`))
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