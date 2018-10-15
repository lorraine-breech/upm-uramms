import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';
import { MyPanelComponent } from './pages/my-panel/my-panel.component';
import { MyStudyComponent } from './pages/my-study/my-study.component';
import { RequestsComponent } from './pages/requests/requests.component';

import { MyAccountComponent } from '../shared/pages/my-account/my-account.component';
import { MyCalendarComponent } from '../shared/pages/my-calendar/my-calendar.component';
import { CreateRequestComponent } from './pages/requests/create-request/create-request.component';
import { ApprovalRequestComponent } from './pages/requests/create-request/approval-request/approval-request.component';
import { PresentationRequestComponent } from './pages/requests/create-request/presentation-request/presentation-request.component';
import { ChangeProposalRequestComponent } from './pages/requests/create-request/change-proposal-request/change-proposal-request.component';
import { RequestListComponent } from './pages/requests/request-list/request-list.component';
import { CancelRequestComponent } from './pages/requests/cancel-request/cancel-request.component';
import { CancelAppointmentComponent } from './pages/requests/cancel-appointment/cancel-appointment.component';
import { SubmitRevisionComponent } from './pages/requests/submit-revision/submit-revision.component';

import { AuthGuard } from '../shared/services/auth-guard.service';
import { CanDeactivateGuard } from '../shared/services/can-deactivate-guard.service';

const studentRoutes: Routes = [
  {
    path: '',
    component: StudentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'requests',
        component: RequestsComponent,
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'create-request',
            component: CreateRequestComponent,
            canActivateChild: [AuthGuard],
            canDeactivate: [ CanDeactivateGuard ],
            children: [
              { path: 'approval-request', component: ApprovalRequestComponent, canDeactivate: [ CanDeactivateGuard ] },
              { path: 'presentation-request', component: PresentationRequestComponent, canDeactivate: [ CanDeactivateGuard ] },
              { path: 'change-proposal-request', component: ChangeProposalRequestComponent, canDeactivate: [ CanDeactivateGuard ] }, 
            ]
          },
          { path: 'request-list', component: RequestListComponent },
          { path: 'cancel-request', component: CancelRequestComponent },
          { path: 'cancel-appointment', component: CancelAppointmentComponent },
          { path: 'submit-revision', component: SubmitRevisionComponent }
        ]
      },
      { path: 'my-calendar', component: MyCalendarComponent },
      { path: 'my-panel', component: MyPanelComponent },
      { path: 'my-study', component: MyStudyComponent },
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
