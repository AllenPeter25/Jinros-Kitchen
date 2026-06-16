import { Component, signal } from '@angular/core';
import {NavigationEnd, RouterOutlet} from '@angular/router';
import {Header} from './header/header';
import {FooterComponent} from './footer-component/footer-component';
import {MenuComponent} from './menu-component/menu-component';
import {AboutComponent} from './about-component/about-component';
import {Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    FooterComponent,
    MenuComponent,
    AboutComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('jinros-kitchen');
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.router?.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
