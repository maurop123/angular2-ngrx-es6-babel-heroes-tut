import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { Hero } from './hero'

@Injectable()
export class HeroSearchService {
  constructor(http) {
    this.http = http
  }

  static get parameters() {
    return [[Http]]
  }

  search(term) {
    return this.http.get(`app/heroes/?name=${term}`)
    .map(res => res.json().data)
  }
}
