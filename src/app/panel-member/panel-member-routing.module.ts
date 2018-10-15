import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PanelMemberComponent } from './panel-member.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { RequestListComponent } from './pages/requests/request-list/request-list.component';
import { AskForRevisionComponent } from './pages/requests/ask-for-revision/ask-for-revision.component';
import { StudentsComponent } from './pages/students/students.component';
import { MyCalendarComponent } from '../shared/pages/my-calendar/my-calendar.component';
import { MyAccountComponent } from '../shared/pages/my-account/my-account.component';


const panelMemberRoutes: Routes = [
  {
    path: '',
    component: PanelMemberComponent,
    children: [
      { 
        path: 'requests',
        component: RequestsComponent,
        children: [
          { path: 'request-list', component: RequestListComponent },
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
