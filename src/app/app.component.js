import {Component} from '@angular/core'
import template from './app.template.html'

@Component({
  selector: 'my-app',
  template: template
})
export class AppComponent {
  constructor() {}
}

//(function(app) {
//  app.AppComponent =
//    ng.core.Component({
//      selector: 'my-app',
//      template: '<h1>My First Angular 2 App</h1>'
//    })
//    .Class({
//      constructor: function() {}
//    });
//})(window.app || (window.app = {}));
