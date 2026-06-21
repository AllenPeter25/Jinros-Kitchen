import {Component, OnInit, signal} from '@angular/core';
import {NavigationEnd, RouterOutlet} from '@angular/router';
import {Header} from './header/header';
import {FooterComponent} from './footer-component/footer-component';
import {Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {filter} from 'rxjs';
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App implements OnInit {
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

  ngOnInit(): void {
    inject();
    injectSpeedInsights()
  }
}
