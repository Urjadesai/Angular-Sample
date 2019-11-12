import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Router} from '@angular/router';
import { NgModule } from '@angular/core';
import bootstrap from "bootstrap";

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const router : Router: [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

      router;
      // { path: 'home', component: HomeComponent},
      // { path: 'about', component: AboutComponent},
      // {path: '',redirectTo:'/home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
