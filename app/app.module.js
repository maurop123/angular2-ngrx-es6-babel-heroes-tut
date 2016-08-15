import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule, XHRBackend } from '@angular/http'
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'
import {provideStore} from "@ngrx/store";

import * as APP_REDUCERS from "./reducers";
import { AppComponent } from './app.component'
import {routing} from './app.routing'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { HeroService } from './hero.service'
import { DashboardComponent } from './dashboard.component'
import { HeroSearchComponent } from './hero-search.component'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService,
    provideStore(APP_REDUCERS),
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: InMemoryDataService }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
