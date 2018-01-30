import { Component} from '@angular/core';
import { NavComponent } from './navbar.component';

@Component({
  selector: 'app-root',
  template: ` <nav></nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
