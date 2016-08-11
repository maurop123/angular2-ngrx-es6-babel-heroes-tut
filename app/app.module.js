// (function(app) {
//   app.AppModule =
//     ng.core.NgModule({
//       imports: [ ng.platformBrowser.BrowserModule ],
//       declarations: [ app.AppComponent ],
//       bootstrap: [ app.AppComponent ]
//     })
//     .Class({
//       constructor: function() {}
//     });
// })(window.app || (window.app = {}));

import { NgModule }      from 'angular2/core';
import { BrowserModule } from 'angular2/platform/browser';

// import { AppComponent }  from './app.component';
import { Component } from 'angular2/core';
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {
  constructor() {}
}

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

