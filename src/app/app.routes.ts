import { Routes } from '@angular/router';
import {HomeComponent} from './home-component/home-component';
import {AboutComponent} from './about-component/about-component';
import {MenuComponent} from './menu-component/menu-component';

export const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "menu", component: MenuComponent}
];
