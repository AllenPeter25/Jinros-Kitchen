import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.less',
  imports: [
    NgOptimizedImage,
    RouterLink,
    CommonModule
  ],
  standalone: true
})
export class Header {
  naviagte(url: string): void {
    window.open(url, '_blank')
  }
}
