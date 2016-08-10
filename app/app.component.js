(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>'
    })
    .Class({
      //title: function() {
       // return 'Super Better'
      //},
      //hero: function() {
      //  return 'Avatar Mau'
      //},
      constructor: function() {
        this.hero = 'Avatar Mau';
        this.title = 'Super Better';
      }
    });
})(window.app || (window.app = {}));

