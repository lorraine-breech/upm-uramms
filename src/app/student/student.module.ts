import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentNavbarComponent } from './student-navbar/student-navbar.component';
import { MyPanelComponent } from './pages/my-panel/my-panel.component';
import { MyStudyComponent } from './pages/my-study/my-study.component';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './student.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { RequestListComponent } from './pages/requests/request-list/request-list.component';
import { RequestDetailsComponent } from './pages/requests/request-details/request-details.component';
import { CancelAppointmentComponent } from './pages/requests/cancel-appointment/cancel-appointment.component';
import { CreateRequestComponent } from './pages/requests/create-request/create-request.component';
import { SubmitRevisionComponent } from './pages/requests/submit-revision/submit-revision.component';
import { CancelRequestComponent } from './pages/requests/cancel-request/cancel-request.component';
import { ApprovalRequestComponent } from './pages/requests/create-request/approval-request/approval-request.component';
import { PresentationRequestComponent } from './pages/requests/create-request/presentation-request/presentation-request.component';
import { ChangeProposalRequestComponent } from './pages/requests/create-request/change-proposal-request/change-proposal-request.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule
  ],
  declarations: [
    StudentComponent,
    StudentNavbarComponent,
    MyPanelComponent,
    MyStudyComponent,
    RequestsComponent,
    RequestListComponent,
    RequestDetailsComponent,
    CreateRequestComponent,
    CancelAppointmentComponent,
    CancelRequestComponent,
    SubmitRevisionComponent,
    ApprovalRequestComponent,
    PresentationRequestComponent,
    ChangeProposalRequestComponent
  ]
})
export class StudentModule { }
