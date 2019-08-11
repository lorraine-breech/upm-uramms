
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Professor } from '../models/professor';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProfessorService {
  result: Professor[];
  currentProfessor: Professor;
  currentOtherType: string; 
  private professorsUrl = "api/professors";
  private createProfessorUrl = "api/createProfessor";
  private professorPanelMemberUsersUrl = "api/professorPanelMemberUsers";

  
  constructor( private _http: HttpClient ) { }
  
  setCurrentOtherType(currOtherType: string){
    this.currentOtherType = currOtherType;
  }
  getCurrentOtherType(){
    return this.currentOtherType;
  }

  setCurrentProfessor(currProf: Professor){
    this.currentProfessor = currProf; 
  }
 
  getCurrentProfessor(){
    return this.currentProfessor;
  }
  deleteProfessor(professor: Professor): Observable<{}>{
    const id = typeof professor === 'number'? professor : professor.getProfessorId();
    const url = `${this.professorsUrl}/${id}`; // DELETE api/heroes/42
    return this._http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteProfessor error'))
      );
  }
  //why is this updateStudentUser here?
  updateStudentUser(professorUser: Professor ): Observable<any>{
    return this._http.put(this.professorsUrl, professorUser, httpOptions).pipe(
      tap(_ => this.log(`updated professorUser id=${professorUser.getProfessorId()}`)),
      catchError(this.handleError<any>('updateProfessorUser'))
    );
  }
  addProfessor(
    fname,
    mname,
    lname,
    emp_num,
    position,
    title,
    dept,
    college,
    is_other_user,
    other_user_type,
    is_pm_user,
    user_type,
    user_username,
    user_password
  ){
    const url = this.createProfessorUrl;
    return this._http.post<Professor>(url, {
      fname,
      lname,
      mname,
      emp_num,
      position,
      title,
      dept,
      college,
      is_other_user,
      other_user_type,
      is_pm_user,
      user_type,
      user_username,
      user_password
    }).pipe(
      tap(data => {
        return data;
      }),
      catchError(this.handleError<Professor>(`create student user error professor_name=${fname}`))
    )

  }

  getProfessorPanelMemberUsers(): Observable<Professor[]> { //return the panelmemberusers among the professors
    return this._http.get<Professor[]>(this.professorPanelMemberUsersUrl)
      .pipe(
        tap(_ => this.log('fetched panel member users among the professors')),
        catchError(this.handleError('getProfessorPanelMemberUsers', []))
      );
  }
  
  getProfessor(profId: string): Observable<Professor>{
    let params = new HttpParams().set('id', profId);

    return this._http.get<Professor>(this.professorsUrl,{
      params: params
    }).pipe(
        tap(_ =>this.log('fetched professor by id')),
        catchError(this.handleError<Professor>(`getDepartment professorName=${profId}`))
    );
  }
  
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
