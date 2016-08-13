import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Hero } from './hero'
import { HeroService } from './hero.service'
import template from './dashboard.template.html'
import styles from './dashboard.styles.css'

@Component({
  selector: 'my-dashboard',
  template: template,
  styles: [styles]
})
export class DashboardComponent implements OnInit {
  heroes = []

  static get parameters() {
    return [[HeroService], [Router]]
  }

  constructor(heroService, router) {
    this.heroService = heroService
    this.router = router
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes.slice(1,5)
    })
  }

  gotoDetail(hero) {
    let link = ['/detail', hero.id]
    this.router.navigate(link)
  }
}
