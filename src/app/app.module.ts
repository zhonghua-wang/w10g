import './rxjs-extension'

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {FooterComponent} from './footer/footer.component';
import {LearnNg2Component} from './learn-ng2/learn-ng2.component';
import {AboutComponent} from './about/about.component';
import {ErrorComponent} from './error/error.component';
import {HomeComponent} from './home/home.component';
import {AttributeDirectiveComponent} from './learn-ng2/attribute-directive/attribute-directive.component';
import {HighlightDirective} from './learn-ng2/attribute-directive/highlight.directive';
import {MenuComponent} from './menu/menu.component';
import {MenuService} from './menu/menu.service';
import {InMemoryDataService} from "./in-memory-data.service";
import {routing} from './app.routing';
import {NglModule} from 'ng-lightning/ng-lightning';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    SideMenuComponent,
    FooterComponent,
    LearnNg2Component,
    AboutComponent,
    ErrorComponent,
    HomeComponent,
    AttributeDirectiveComponent,
    HighlightDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing,
    NglModule.forRoot({
        svgPath: '../node_modules/@salesforce-ux/design-system/assets/icons'
      }
    )
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
