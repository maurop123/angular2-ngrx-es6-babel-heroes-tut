import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'

import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
  heroesUrl = 'app/heroes'
    
  constructor(http) {
    this.http = http
  }

  static get parameters() {
    return [[Http]]
  }

  getHero(id) {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id))
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
