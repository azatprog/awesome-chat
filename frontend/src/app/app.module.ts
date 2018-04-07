import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MainComponent } from './main/main.component';
import { UtilService } from './services/util.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [ UtilService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
