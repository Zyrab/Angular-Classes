import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WorningAlertComponent } from './WarningAlert/WarningAlert.component';
import { SuccesAlertComponent } from './succes-alert/succes-alert.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WorningAlertComponent,
    SuccesAlertComponent,
    Assignment2Component,
    Assignment3component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
