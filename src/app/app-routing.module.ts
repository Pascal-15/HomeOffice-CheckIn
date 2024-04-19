import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { StopComponent } from './stop/stop.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "start", component: StartComponent},
  {path: "stop", component: StopComponent},
  {path: "overview", component: OverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, StartComponent, StopComponent, OverviewComponent]
