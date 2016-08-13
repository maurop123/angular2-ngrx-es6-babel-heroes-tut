import { Component, OnInit } from '@angular/core'
import { Router }            from '@angular/router'
import { Observable }        from 'rxjs/Observable'
import { Subject }           from 'rxjs/Subject'

import { HeroSearchService } from './hero-search.service'
import { Hero } from './hero'
import template from './hero-search.template.html'
import styles from './hero-search.styles.css'

@Component({
  selector: 'hero-search',
  template: template,
  style: [styles],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes
  searchTerms = new Subject()

  constructor(heroSearchService, router) {
    this.heroSearchService = heroSearchService
    this.router = router
  }

  static get parameters() {
    return [[HeroSearchService], [Router]]
  }
  
  // Push a search term into the observable stream.
  search(term) { this.searchTerms.next(term) }

  ngOnInit() {
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error)
        return Observable.of([])
      })
  }

  gotoDetail(hero) {
    let link = ['/detail', hero.id]
    this.router.navigate(link)
  }
}

