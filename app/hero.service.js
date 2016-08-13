import { Injectable } from '@angular/core'

import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
  getHero(id) {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id))
  }

  getHeroes() {
    return Promise.resolve(HEROES)
  }

  getHeroesSlowly() {
    return new Promise(resolve => setTimeout(() => resolve(HEROES), 5000))
  }
}
