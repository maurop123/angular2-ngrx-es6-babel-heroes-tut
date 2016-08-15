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
  error

  constructor(heroService, router) {
    this.heroService = heroService
    this.router = router
  }

  ngOnInit() {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes)
    this.heroService.getHeros().subscribe(heroes => {
      this.heroes = heroes
    })
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

  addHero() {
    this.addingHero = true
    this.selectedHero = null
  }

  close(savedHero) {
    this.addingHero = false
    if (savedHero) this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  deleteHero(hero, event) {
    event.stopPropagation()
    this.heroService.delete(hero).then(res => {
      this.heroes = this.heroes.filter(h => h !== hero)
      if (this.selectedHero === hero) this.selectedHero = null
    }).catch(err => this.error = err)
  }
}
