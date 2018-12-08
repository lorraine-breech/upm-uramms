import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutComponent },
      { path: 'help', component: HelpComponent }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(homeRoutes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
