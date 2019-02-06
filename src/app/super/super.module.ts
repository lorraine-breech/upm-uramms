import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperRoutingModule } from './super-routing.module';
import { SuperNavbarComponent } from './super-navbar/super-navbar.component';
import { StudentsComponent } from './pages/students/students.component';
import { ProfessorsComponent } from './pages/professors/professors.component';
import { SuperUsersComponent } from './pages/super-users/super-users.component';
import { SharedModule } from '../shared/shared.module';
import { SuperComponent } from './super.component';
import { AddStudentFormComponent } from './pages/students/add-student-form/add-student-form.component';
import { StudentListComponent } from './pages/students/student-list/student-list.component';
import { ProfessorListComponent } from './pages/professors/professor-list/professor-list.component';
import { AddProfessorFormComponent } from './pages/professors/add-professor-form/add-professor-form.component';
import { SuperUserListComponent } from './pages/super-users/super-user-list/super-user-list.component';
import { AddSuperUserFormComponent } from './pages/super-users/add-super-user-form/add-super-user-form.component';
import { ViewActivitiesComponent } from './pages/super-users/view-activities/view-activities.component';
import { ConfirmAddPmComponent } from './pages/professors/confirm-add-pm/confirm-add-pm.component';
import { ConfirmAddOtherComponent } from './pages/professors/confirm-add-other/confirm-add-other.component';
import { EditStudentFormComponent } from './pages/students/edit-student-form/edit-student-form.component';
import { EditProfessorFormComponent } from './pages/professors/edit-professor-form/edit-professor-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SuperRoutingModule
  ],
  declarations: [
    SuperComponent,
    SuperNavbarComponent,
    StudentsComponent,
    ProfessorsComponent,
    SuperUsersComponent,
    AddStudentFormComponent,
    StudentListComponent,
    ProfessorListComponent,
    AddProfessorFormComponent,
    SuperUserListComponent,
    AddSuperUserFormComponent,
    ViewActivitiesComponent,
    ConfirmAddPmComponent,
    ConfirmAddOtherComponent,
    EditStudentFormComponent,
    EditProfessorFormComponent
  ]
})
export class SuperModule { }
