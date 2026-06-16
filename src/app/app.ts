import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {FooterComponent} from './footer-component/footer-component';
import {MenuComponent} from './menu-component/menu-component';
import {AboutComponent} from './about-component/about-component';

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
}
