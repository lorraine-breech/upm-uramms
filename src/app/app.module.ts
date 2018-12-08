import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { CanDeactivateGuard } from './shared/services/can-deactivate-guard.service';
import { HomeModule } from './home/home.module';
import { UserService } from './shared/services/user.service';
import { SuperUserService } from './shared/services/super-user.service';
import {
  HttpClientModule
} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    UserService,
    SuperUserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
