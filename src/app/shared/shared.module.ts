import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyCalendarComponent } from './pages/my-calendar/my-calendar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MyAccountComponent, 
    MyCalendarComponent, 
    PageNotFoundComponent
  ],
  exports: [
    HttpClientModule
  ]
})
export class SharedModule { }
