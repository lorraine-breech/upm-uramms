import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskForRevisionComponent } from './pages/requests/ask-for-revision/ask-for-revision.component';
import { RequestListComponent } from './pages/requests/request-list/request-list.component';
import { SharedModule } from '../shared/shared.module';
import { PanelMemberRoutingModule } from './panel-member-routing.module';
import { RequestsComponent } from './pages/requests/requests.component';
import { StudentsComponent } from './pages/students/students.component';
import { PanelMemberComponent } from './panel-member.component';
import { PanelMemberNavbarComponent } from './panel-member-navbar/panel-member-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PanelMemberRoutingModule
  ],
  declarations: [
    PanelMemberComponent,
    PanelMemberNavbarComponent,
    RequestsComponent,
    RequestListComponent,
    AskForRevisionComponent, 
    StudentsComponent
  ]
})
export class PanelMemberModule { }
