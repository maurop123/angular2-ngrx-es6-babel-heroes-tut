import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { HeroService } from './hero.service'
import styles from './heroes.styles.css'
import template from './heroes.template.html'

@Component({
  selector: 'my-heroes',
  template: template,
  styles: [styles],
})
export class HeroesComponent implements OnInit { 
  constructor(heroService, router) {
    this.heroService = heroService
    this.router = router
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  static get parameters() {
    return [[HeroService], [Router]]
  }
  
  onSelect(hero) {
    this.selectedHero = hero
  }

  gotoDetail(hero) {
    let link = ['/detail', hero.id]
    this.router.navigate(link)
  }
}
