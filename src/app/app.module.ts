import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { CanDeactivateGuard } from './shared/services/can-deactivate-guard.service';
import { RequestsComponent } from './others/pages/requests/requests.component';
import { PresentationSchedulesComponent } from './others/pages/presentation-schedules/presentation-schedules.component';
import { StudentsComponent } from './others/pages/students/students.component';
import { PanelMembersComponent } from './others/pages/panel-members/panel-members.component';
import { StudiesComponent } from './others/pages/studies/studies.component';
import { RequestListComponent } from './others/pages/requests/request-list/request-list.component';
import { AskForRevisionComponent } from './others/pages/requests/ask-for-revision/ask-for-revision.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HelpComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
