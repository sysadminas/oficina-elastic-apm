import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApmErrorHandler, ApmService } from '@elastic/apm-rum-angular';
import { ErrorHandler } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: ApmService, useClass: ApmService, deps: [Router] },
    { provide: ErrorHandler, useClass: ApmErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(ApmService) service: ApmService) {
    const apm = service.init({
      serviceName: 'angular-app',
      secretToken: 'il9Q6dKZLpX0QJ962J',
      serverUrl:
      'https://ef5b42bf4d864adb83826a400129eb3d.apm.us-east-1.aws.cloud.es.io:443',
      logLevel: 'trace',
      serviceVersion: '0.1',
    });

    apm.setUserContext({
      username: 'foo',
      id: 'bar'
    });
  }
}
