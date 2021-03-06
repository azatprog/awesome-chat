import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MainComponent } from './main/main.component';
import { UtilService } from './services/util.service';
import { AuthenticationService } from './services/authentication.service';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000/events', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [ UtilService, AuthenticationService, AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
