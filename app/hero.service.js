import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { Store } from '@ngrx/store'

@Injectable()
export class HeroService {
  heroesUrl = 'app/heroes'
    
  constructor(http, store) {
    this.http = http
    this.store = store
  }

  static get parameters() {
    return [[Http], [Store]]
  }

  getHero(id) {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id))
  }

  getHeros() {
    return this.store.select('heroes')
  }

  getHeroes() {
    return this.http.get(this.heroesUrl).toPromise()
      .then(response => response.json().data)
      .catch(this.handleError)
  }

  handleError(error) {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

  getHeroesSlowly() {
    return new Promise(resolve => setTimeout(() => resolve(this.getHeroes()), 5000))
  }

  save(hero) {
    return (hero.id) ? this.put(hero) : this.post(hero)
  }

  saveHero(hero) {
    this.store.dispatch({
      type:'ADD_HERO',
      payload: hero
    })

    return this.store.select('heroes')
    .flatMap(heroes => heroes.filter(_hero => _hero.name == hero.name))
  }

  post(hero) {
    let headers = new Headers({ 'Content-Type': 'application/json'})
    return this.http.post(this.heroesUrl, JSON.stringify(hero), {headers:headers})
    .toPromise().then(res => res.json().data).catch(this.handleError)
  }

  // Update existing Hero
  put(hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http.put(url, JSON.stringify(hero), {headers: headers})
    .toPromise().then(() => hero).catch(this.handleError);
  }

  // Delete existing Hero
  delete(hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http.delete(url, {headers: headers})
    .toPromise().then(() => hero).catch(this.handleError);
  }
}
