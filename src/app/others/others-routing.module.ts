import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OthersComponent } from './others.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { RequestListComponent } from './pages/requests/request-list/request-list.component';
import { AskForRevisionComponent } from './pages/requests/ask-for-revision/ask-for-revision.component';
import { PresentationSchedulesComponent } from './pages/presentation-schedules/presentation-schedules.component';
import { StudentsComponent } from './pages/students/students.component';
import { PanelMembersComponent } from './pages/panel-members/panel-members.component';
import { StudiesComponent } from './pages/studies/studies.component';
import { MyAccountComponent } from '../shared/pages/my-account/my-account.component';

const othersRoutes: Routes = [
  {
    path: '',
    component: OthersComponent,
    children: [
      {
        path: 'requests',
        component: RequestsComponent,
        children: [
          { path: 'request-list', component: RequestListComponent },
          { path: 'ask-for-revision', component: AskForRevisionComponent }
        ]
      },
      { path: 'presentation-schedules', component: PresentationSchedulesComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'panel-members', component: PanelMembersComponent },
      { path: 'studies', component: StudiesComponent },
      { path: 'my-account', component: MyAccountComponent }
    ]
  }
]
@NgModule({
  imports: [ RouterModule.forChild(othersRoutes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class OthersRoutingModule { }
