import { Component, Input } from '@angular/core'
import template from './hero-detail.template.html'
import { Hero } from './hero'

@Component({
  selector: 'my-hero-detail',
  template: template
})
export class HeroDetailComponent {
  @Input()
  hero
}
