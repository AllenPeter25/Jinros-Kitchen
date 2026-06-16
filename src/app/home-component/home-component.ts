import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [
    RouterLink
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.less',
  standalone: true
})
export class HomeComponent {

  navigate(): void {
    window.open('https://www.youtube.com/@Jinroskitchen', '_blank');
  }
}
