// import template from './app.template.html'

(function(app) {

  var Hero = function(cfg = {}) {
    return {
      id: (cfg.id !== undefined) ? cfg.id : 0,
      name: (cfg.name !== undefined) ? cfg.name : 'Mau'
    }
  };

  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      // template: template
      templateUrl: "app/app.template.html"
    })
    .Class({
      constructor: function() {
        this.hero = Hero();
        this.title = 'Super Better';
      }
    });
})(window.app || (window.app = {}));

