
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Professor } from '../models/professor';

@Injectable()
export class ProfessorService {
  result: Professor[];
  private professorsUrl = "api/professors";

  constructor( private _http: HttpClient ) { }

  getProfessors (): Observable<Professor[]> {
    return this._http.get<Professor[]>(this.professorsUrl)
      .pipe(
        tap(_ => this.log('fetched professors')),
        catchError(this.handleError('getProfessors', []))
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
