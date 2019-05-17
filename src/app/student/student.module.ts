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
import { SubmitRevisionComponent } from './pages/requests/submit-revision/submit-revision.component';
import { CancelRequestComponent } from './pages/requests/cancel-request/cancel-request.component';
import { DataService } from './pages/requests/request-list/dataService';
import { PresentationScheduleComponent } from './pages/requests/request-details/presentation-schedule/presentation-schedule.component';
import { PaperApprovalComponent } from './pages/requests/request-details/paper-approval/paper-approval.component';
import { ChangeProposalComponent } from './pages/requests/request-details/change-proposal/change-proposal.component';
import { AddChangePanelMemberComponent } from './pages/requests/request-details/add-change-panel-member/add-change-panel-member.component';
import { ChangePanelMemberRequestComponent } from './pages/my-panel/change-panel-member-request/change-panel-member-request.component';
import { MyPanelListComponent } from './pages/my-panel/my-panel-list/my-panel-list.component';
import { MyStudyDetailsComponent } from './pages/my-study/my-study-details/my-study-details.component';
import { ChangeProposalRequestComponent } from './pages/my-study/change-proposal-request/change-proposal-request.component';
import { CreatePresentationScheduleRequestComponent } from './pages/requests/create-presentation-schedule-request/create-presentation-schedule-request.component';
import { CreatePaperApprovalRequestComponent } from './pages/requests/create-paper-approval-request/create-paper-approval-request.component';
import { AddPanelMemberRequestComponent } from './pages/my-panel/add-panel-member-request/add-panel-member-request.component';
import { AddStudyComponent } from './pages/my-study/add-study/add-study.component';
import { FileUploadModule } from 'ng2-file-upload';
import { EditStudyComponent } from './pages/my-study/edit-study/edit-study.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule,
    FileUploadModule
  ],
  declarations: [
    StudentComponent,
    StudentNavbarComponent,
    MyPanelComponent,
    MyStudyComponent,
    RequestsComponent,
    RequestListComponent,
    RequestDetailsComponent,
    CancelAppointmentComponent,
    CancelRequestComponent,
    SubmitRevisionComponent,
    PresentationScheduleComponent,
    PaperApprovalComponent,
    ChangeProposalComponent,
    ChangeProposalRequestComponent,
    AddChangePanelMemberComponent,
    ChangePanelMemberRequestComponent,
    MyPanelListComponent,
    MyStudyDetailsComponent,
    CreatePresentationScheduleRequestComponent,
    CreatePaperApprovalRequestComponent,
    AddPanelMemberRequestComponent,
    EditStudyComponent,
    AddStudyComponent
  ],
  providers: [ DataService ]
})
export class StudentModule { }
