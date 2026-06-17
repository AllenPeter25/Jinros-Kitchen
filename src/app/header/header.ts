import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

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

  naviagte(url: string): void {
    window.open(url, '_blank')
  }

  viewToolbarOptions() {
    this.viewToolbar.set(!this.viewToolbar());
  }
}
