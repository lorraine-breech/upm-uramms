import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperComponent } from './super.component';
import { StudentsComponent } from './pages/students/students.component';
import { ProfessorsComponent } from './pages/professors/professors.component';
import { SuperUsersComponent } from './pages/super-users/super-users.component';
import { AddStudentFormComponent } from './pages/students/add-student-form/add-student-form.component';
import { StudentListComponent } from './pages/students/student-list/student-list.component';
import { ProfessorListComponent } from './pages/professors/professor-list/professor-list.component';
import { AddProfessorFormComponent } from './pages/professors/add-professor-form/add-professor-form.component';
import { SuperUserListComponent } from './pages/super-users/super-user-list/super-user-list.component';
import { combineAll } from 'rxjs/operators';
import { AddSuperUserFormComponent } from './pages/super-users/add-super-user-form/add-super-user-form.component';
import { ViewActivitiesComponent } from './pages/super-users/view-activities/view-activities.component';


const superRoutes: Routes = [
  {
    path:'',
    component: SuperComponent,
    children: [
      { 
        path: 'students', 
        component: StudentsComponent,
        children: [
          { path: '', component: StudentListComponent },
          { path: 'add-student-form', component: AddStudentFormComponent }
        ] 
    
      },
      {
        path: 'professors', 
        component: ProfessorsComponent,
        children: [
          { path: '', component: ProfessorListComponent },
          { path: 'add-professor-form', component: AddProfessorFormComponent }
        ] 
      },
      { 
        path: 'super-users', 
        component: SuperUsersComponent,
        children: [
          { path: '', component: SuperUserListComponent },
          { path: 'add-super-user-form', component: AddSuperUserFormComponent },
          { path: 'view-activities', component: ViewActivitiesComponent }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(superRoutes)],
  exports: [ RouterModule ],
  declarations: []
})
export class SuperRoutingModule { }
