import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.less',
  imports: [
    RouterLink,
    CommonModule
  ],
  standalone: true
})
export class Header {

  viewToolbar = signal(false);

  actions = signal([
    {
      name: "Home",
      navigateTo: "/home"
    },
    {
      name: "About",
      navigateTo: "/about"
    },
    {
      name: "Menu",
      navigateTo: "/menu"
    }
  ])

  currentPath = signal("")

  constructor(
    private router: Router
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      ).subscribe((event: NavigationEnd) => {
        this.currentPath.set(event.urlAfterRedirects);
    })
  }

  navigate(url: string): void {
    window.open(url, '_blank')
  }

  viewToolbarOptions() {
    this.viewToolbar.set(!this.viewToolbar());
  }
}
