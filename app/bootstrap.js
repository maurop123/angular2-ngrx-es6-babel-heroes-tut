import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {provideStore} from "@ngrx/store";
import * as APP_REDUCERS from "./reducers";
import { HeroService } from './hero.service'
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'

export function main() {
  return bootstrap(TodoApp, [
    provideStore(APP_REDUCERS),
    HeroService,
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: InMemoryDataService }
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
