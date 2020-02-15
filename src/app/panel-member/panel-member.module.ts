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
import { RequestDetailsComponent } from './pages/requests/request-details/request-details.component';
import { AddChangePanelMemberComponent } from './pages/requests/request-details/add-change-panel-member/add-change-panel-member.component';
import { ChangeProposalComponent } from './pages/requests/request-details/change-proposal/change-proposal.component';
import { PresentationScheduleComponent } from './pages/requests/request-details/presentation-schedule/presentation-schedule.component';
import { PaperApprovalComponent } from './pages/requests/request-details/paper-approval/paper-approval.component';

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
    RequestDetailsComponent,
    AskForRevisionComponent, 
    StudentsComponent, 
    RequestDetailsComponent, 
    AddChangePanelMemberComponent, 
    ChangeProposalComponent, 
    PresentationScheduleComponent, 
    PaperApprovalComponent
  ]
})
export class PanelMemberModule { }
