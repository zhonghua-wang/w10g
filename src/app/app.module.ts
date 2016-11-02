import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import {NgSemanticModule} from 'ng-semantic';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { LearnNg2Component } from './learn-ng2/learn-ng2.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    SideMenuComponent,
    FooterComponent,
    LearnNg2Component,
    AboutComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'learn-ng2', component: LearnNg2Component },
      {path: 'about',component: AboutComponent},
      {path: '', component: HomeComponent},
      {path: '**', component: ErrorComponent}
    ]),
    NgSemanticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
