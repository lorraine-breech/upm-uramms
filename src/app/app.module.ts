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
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
