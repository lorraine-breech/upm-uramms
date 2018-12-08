import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { Http, Headers, RequestOptions } from '@angular/http';

import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  result: any;

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get("/api/users").pipe(
      map(result => this.result = result)
    );  
  }

  getSuperUsers(){
    return this._http.get("/api/users").pipe(
      map(result => this.result = result)
    );
  }
}