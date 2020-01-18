import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ByebyeComponent } from './byebye/byebye.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
