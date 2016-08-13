import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';

import styles from './hero-detail.styles.css'
import template from './hero-detail.template.html'
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  template: template,
  styles: [styles]
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero

  static get parameters() {
    return [[HeroService], [ActivatedRoute]]
  }

  constructor(heroService, route) {
    this.heroService = heroService
    this.route = route
  }

  ngOnInit() {
    this.route.params.forEach(params => {
      let id = +params.id
      this.heroService.getHero(id).then(hero => this.hero = hero)
    })
  }

  goBack() {
    window.history.back()
  }
}
