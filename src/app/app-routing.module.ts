import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { HelpComponent } from './home/pages/help/help.component';
import { AboutComponent } from './home/pages/about/about.component';
import { LoginComponent } from './home/pages/login/login.component';

const routes: Routes = [
  { path: 'super', loadChildren: './super/super.module#SuperModule' },
  { path: 'others', loadChildren: './others/others.module#OthersModule' }, 
  { path: 'panel-member', loadChildren: './panel-member/panel-member.module#PanelMemberModule' },
  { path: 'student', loadChildren: './student/student.module#StudentModule' },
  /*{ path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: 'login', component: LogInComponent },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  */
  
  { path: 'home/login', component: LoginComponent },
  { path: 'home/help', component: HelpComponent },
  { path: 'home/about', component: AboutComponent },
  { path: '', redirectTo: '/home/login', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
