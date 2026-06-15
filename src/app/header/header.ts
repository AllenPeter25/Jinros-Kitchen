import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.less',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  standalone: true
})
export class Header {}
