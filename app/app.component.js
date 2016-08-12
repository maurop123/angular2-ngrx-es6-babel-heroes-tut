import { Component } from '@angular/core';
import template from './app.template.html'

@Component({
  selector: 'my-app',
  template: template
})

export class AppComponent { 
  constructor() {
    this.hero = new Hero({id:0, name:'Mau'})
  }
}

export class Hero {
  constructor(cfg={}) {
    this.id = (cfg.id !== undefined) ? cfg.id : null
    this.name = (cfg.name !== undefined) ? cfg.name : null
  }
}
