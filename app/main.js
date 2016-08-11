import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);


// (function(app) {
//   document.addEventListener('DOMContentLoaded', function() {
//     ng.platformBrowserDynamic
//       .platformBrowserDynamic()
//       .bootstrapModule(app.AppModule);
//   });
// })(window.app || (window.app = {}));
