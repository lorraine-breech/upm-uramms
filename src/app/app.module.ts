import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { CanDeactivateGuard } from './shared/services/can-deactivate-guard.service';
import { HomeModule } from './home/home.module';
import { UserService } from './shared/services/user.service';
import { SuperUserService } from './shared/services/super-user.service';
import { StudentUserService } from './shared/services/student-user.service';
import { ProfessorService } from './shared/services/professor.service';
import { CourseService } from './shared/services/course.service';
import { PanelMemberUserService } from './shared/services/panel-member-user.service';
import { OtherUserService } from './shared/services/other-user.service';
import { RequestService } from './shared/services/request.service';
import { FileSelectDirective } from 'ng2-file-upload';
import { StudyService } from './shared/services/study.service';
import { PresentationService } from './shared/services/presentation.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    SuperUserService,
    StudentUserService,
    ProfessorService,
    UserService,
    CourseService,
    PanelMemberUserService,
    OtherUserService,
    RequestService,
    StudyService,
    PresentationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
