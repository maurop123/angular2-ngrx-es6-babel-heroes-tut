import {Component} from '@angular/core'
import template from './app.template.html'
import styles from './app.styles.css'

@Component({
  selector: 'my-app',
  template: template,
  styles: [styles]
})
export class AppComponent {
  title = 'Heroes Tour'
}
