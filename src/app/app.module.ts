import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPageComponent } from './new-page/new-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { Router, Routes, RouterModule } from '@angular/router';
const routes:Routes=[
{
  path:"",
  component:FirstPageComponent
},
{
  path:"2",
  component:NewPageComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    NewPageComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }