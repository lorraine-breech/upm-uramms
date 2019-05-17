import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
//import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UserService {

    users: User[];
    user: User;
    private presentationsUrl = "api/presentations";

    constructor(private _http: HttpClient) { }
  
    deletePresentation(presentationId: string): Observable<{}>{
    const url = `${this.presentationsUrl}/${presentationId}`; 
    return this._http.delete(url, httpOptions)
        .pipe(
            catchError(this.handleError('deleteStudy'))
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