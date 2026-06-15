import { Routes } from '@angular/router';
import {HomeComponent} from './home-component/home-component';
import {AboutComponent} from './about-component/about-component';

export const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: "about", component: AboutComponent }
];
