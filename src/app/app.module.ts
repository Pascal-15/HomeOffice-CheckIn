import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//Librarys
import { MatIconModule } from '@angular/material/icon';
/*
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { StopComponent } from './stop/stop.component';
import { OverviewComponent } from './overview/overview.component';*/

@NgModule({
  declarations: [
    AppComponent,
    /*LoginComponent,
    StartComponent,
    StopComponent,
    OverviewComponent*/
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
