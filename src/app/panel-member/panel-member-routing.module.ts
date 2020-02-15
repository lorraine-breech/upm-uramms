import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PanelMemberComponent } from './panel-member.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { RequestListComponent } from './pages/requests/request-list/request-list.component';
import { AskForRevisionComponent } from './pages/requests/ask-for-revision/ask-for-revision.component';
import { StudentsComponent } from './pages/students/students.component';
import { MyCalendarComponent } from '../shared/pages/my-calendar/my-calendar.component';
import { MyAccountComponent } from '../shared/pages/my-account/my-account.component';
import { RequestDetailsComponent } from './pages/requests/request-details/request-details.component';
import { AddChangePanelMemberComponent } from './pages/requests/request-details/add-change-panel-member/add-change-panel-member.component';
import { ChangeProposalComponent } from './pages/requests/request-details/change-proposal/change-proposal.component';
import { PresentationScheduleComponent } from './pages/requests/request-details/presentation-schedule/presentation-schedule.component';
import { PaperApprovalComponent } from './pages/requests/request-details/paper-approval/paper-approval.component';



const panelMemberRoutes: Routes = [
  {
    path: '',
    component: PanelMemberComponent,
    children: [
      { 
        path: 'requests',
        component: RequestsComponent,
        children: [
          { path: '', component: RequestListComponent },
          { 
            path: 'request-details', 
            component: RequestDetailsComponent,
            children: [
              { path: 'acrequest', component: AddChangePanelMemberComponent },
              { path: 'cprequest', component: ChangeProposalComponent },
              { path: 'parequest', component: PaperApprovalComponent },
              { path: 'psrequest', component: PresentationScheduleComponent }

            ]
          },

          { path: 'ask-for-revision', component: AskForRevisionComponent }
        ]
      },
      { path: 'my-calendar', component: MyCalendarComponent},
      { path: 'students', component: StudentsComponent },
      { path: 'my-account', component: MyAccountComponent }
    ]
  }
]
@NgModule({
  imports: [ RouterModule.forChild(panelMemberRoutes) ],
  exports: [ RouterModule ],
  declarations: [ ]
})
export class PanelMemberRoutingModule { }
