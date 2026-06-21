import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-footer-component',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.less',
  standalone: true
})
export class FooterComponent {

  currentYear = signal(new Date().getFullYear());

  naviagte(url: string): void {
    window.open(url, '_blank')
  }
}
