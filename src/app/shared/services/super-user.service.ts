
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { Http, Headers, RequestOptions } from '@angular/http';

import { map } from 'rxjs/operators';
import { SuperUser } from '../models/user-super';

@Injectable()
export class SuperUserService {
    //result: SuperUser;
  result: any;

  constructor(private _http: HttpClient) { }

  getSuperUsers(){
    return this._http.get("/api/users").pipe(
      map(result => this.result = result)
    );
  }
}