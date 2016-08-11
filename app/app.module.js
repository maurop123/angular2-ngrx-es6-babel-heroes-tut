import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
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
