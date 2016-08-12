import { Component, OnInit } from '@angular/core'
import { HeroService } from './hero.service'
import styles from './app.styles.css'
import template from './app.template.html'

@Component({
  selector: 'my-app',
  template: template,
  styles: [styles],
  providers: [HeroService]
})
export class AppComponent implements OnInit { 
  constructor(heroService) {
    this.heroService = heroService
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  static get parameters() {
    return [[HeroService]]
  }
  
  onSelect(hero) {
    this.selectedHero = hero
  }
}
