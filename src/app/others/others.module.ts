import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersRoutingModule } from './/others-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OthersComponent } from './others.component';
import { OthersNavbarComponent } from './others-navbar/others-navbar.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { RequestListComponent } from './pages/requests/request-list/request-list.component';
import { AskForRevisionComponent } from './pages/requests/ask-for-revision/ask-for-revision.component';
import { PresentationSchedulesComponent } from './pages/presentation-schedules/presentation-schedules.component';
import { PanelMembersComponent } from './pages/panel-members/panel-members.component';
import { StudentsComponent } from './pages/students/students.component';
import { StudiesComponent } from './pages/studies/studies.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OthersRoutingModule
  ],
  declarations: [
    OthersComponent,
    OthersNavbarComponent,
    RequestsComponent,
    RequestListComponent,
    AskForRevisionComponent,
    PresentationSchedulesComponent,
    PanelMembersComponent,
    StudentsComponent,
    StudiesComponent
  ]
})
export class OthersModule { }
