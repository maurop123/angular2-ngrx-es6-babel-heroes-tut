import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';

import styles from './hero-detail.styles.css'
import template from './hero-detail.template.html'
import { HeroService } from './hero.service';
import { Hero } from './hero.js';

@Component({
  selector: 'my-hero-detail',
  template: template,
  styles: [styles]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero
  @Output() close = new EventEmitter()
  error
  navigated = false

  static get parameters() {
    return [[HeroService], [ActivatedRoute]]
  }

  constructor(heroService, route) {
    this.heroService = heroService
    this.route = route
  }

  ngOnInit() {
    this.route.params.forEach(params => {
      if (params.id !== undefined) {
        let id = +params.id
        this.navigated = true
        this.heroService.getHero(id).then(hero => this.hero = hero)
      } else {
        this.navigated = false
        this.hero = new Hero()
      }
    })
  }

  save() {
    this.heroService.save(this.hero).then(hero => {
      this.hero = hero
      this.goBack(hero)
    }).catch(err => this.error = err)
  }

  goBack(savedHero=null) {
    this.close.emit(savedHero)
    if (this.navigated) window.history.back()
  }
}
