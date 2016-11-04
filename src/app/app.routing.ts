import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LearnNg2Component} from "./learn-ng2";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "./error/error.component";

import {ComponentCommunicationComponent} from './learn-ng2';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'learn-ng2', component: LearnNg2Component
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '**', component: ErrorComponent
  },
//  learn ng2
  {
    path:'learn-ng2/communication',
    component: ComponentCommunicationComponent
  },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
