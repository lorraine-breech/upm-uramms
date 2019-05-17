import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';

import { StudentComponent } from './student.component';
import { MyPanelComponent } from './pages/my-panel/my-panel.component';
import { MyStudyComponent } from './pages/my-study/my-study.component';
import { RequestsComponent } from './pages/requests/requests.component';

import { MyAccountComponent } from '../shared/pages/my-account/my-account.component';
import { MyCalendarComponent } from '../shared/pages/my-calendar/my-calendar.component';
import { RequestListComponent } from './pages/requests/request-list/request-list.component';
import { CancelRequestComponent } from './pages/requests/cancel-request/cancel-request.component';
import { CancelAppointmentComponent } from './pages/requests/cancel-appointment/cancel-appointment.component';
import { SubmitRevisionComponent } from './pages/requests/submit-revision/submit-revision.component';

import { AuthGuard } from '../shared/services/auth-guard.service';
import { CanDeactivateGuard } from '../shared/services/can-deactivate-guard.service';
import { RequestDetailsComponent } from './pages/requests/request-details/request-details.component';
import { ChangePanelMemberRequestComponent } from './pages/my-panel/change-panel-member-request/change-panel-member-request.component';
import { MyPanelListComponent } from './pages/my-panel/my-panel-list/my-panel-list.component';
import { MyStudyDetailsComponent } from './pages/my-study/my-study-details/my-study-details.component';
import { ChangeProposalRequestComponent } from './pages/my-study/change-proposal-request/change-proposal-request.component';
import { CreatePresentationScheduleRequestComponent } from './pages/requests/create-presentation-schedule-request/create-presentation-schedule-request.component';
import { CreatePaperApprovalRequestComponent } from './pages/requests/create-paper-approval-request/create-paper-approval-request.component';
import { AddPanelMemberRequestComponent } from './pages/my-panel/add-panel-member-request/add-panel-member-request.component';
import { AddStudyComponent } from './pages/my-study/add-study/add-study.component';
import { EditStudyComponent } from './pages/my-study/edit-study/edit-study.component';

const studentRoutes: Routes = [
  {
    path: '',
    component: StudentComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: 'requests',
        component: RequestsComponent,
        //canActivateChild: [AuthGuard],
        children: [
          { path: '', component: RequestListComponent },
          { path: 'cancel-request', component: CancelRequestComponent },
          { path: 'cancel-appointment', component: CancelAppointmentComponent },
          { path: 'submit-revision', component: SubmitRevisionComponent },
          { path: 'request-details', component: RequestDetailsComponent },
          { path: 'create-presentation-request', component: CreatePresentationScheduleRequestComponent },
          { path: 'create-approval-request', component: CreatePaperApprovalRequestComponent }
          
        ]
      },
      { path: 'my-calendar', component: MyCalendarComponent },
      { 
        path: 'my-panel', 
        component: MyPanelComponent, 
        children: [
          { path: '', component: MyPanelListComponent },
          { path: 'change-pm-request', component: ChangePanelMemberRequestComponent },
          { path: 'add-pm-request', component: AddPanelMemberRequestComponent }
        ]
        
      },
      { 
        path: 'my-study', 
        component: MyStudyComponent,
        children: [
          { path: '', component: MyStudyDetailsComponent },
          { path: 'add-study', component: AddStudyComponent },
          { path: 'edit-study', component: EditStudyComponent },
          { path: 'change-proposal-request', component: ChangeProposalRequestComponent }

        ]
      },
      { path: 'my-account', component: MyAccountComponent }
    ]
  }
  
]

@NgModule({
  imports: [ RouterModule.forChild(studentRoutes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class StudentRoutingModule { }
