import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LearnNg2Component} from "./learn-ng2/learn-ng2.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "./error/error.component";


const appRoutes: Routes = [
  {
    path: 'learn-ng2', component: LearnNg2Component
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: '**', component: ErrorComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
