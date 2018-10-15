import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { LogInComponent } from './log-in/log-in.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'others', loadChildren: './others/others.module#OthersModule' }, 
  { path: 'panel-member', loadChildren: './panel-member/panel-member.module#PanelMemberModule' },
  { path: 'student', loadChildren: './student/student.module#StudentModule' },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: 'login', component: LogInComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
