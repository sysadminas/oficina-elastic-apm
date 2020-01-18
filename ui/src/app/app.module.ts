import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Inject } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApmService } from '@elastic/apm-rum-angular';
import { HelloComponent } from './hello/hello.component';
import { ByebyeComponent } from './byebye/byebye.component';
import { ByebyeService } from './byebye/byebye.service';

const routes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full'},
  { path: 'hello', component: HelloComponent },
  { path: 'byebye', component: ByebyeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ByebyeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ByebyeService,
    { provide: ApmService, useClass: ApmService, deps: [Router] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(ApmService) service: ApmService) {
    const apm = service.init({
      serviceName: 'angular-app',
      secretToken: '<apm-token>',
      serverUrl: '<apm-server-url>',
      logLevel: 'trace',
      serviceVersion: '0.1'
    });
  }
}
