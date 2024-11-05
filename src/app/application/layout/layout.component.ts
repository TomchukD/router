import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  template: `
    <ul>
    <li><a routerLink="/app/setting">setting</a></li>
    <li><a [routerLink]="['/app/setting/', 'id']" >setting token</a></li>
    </ul>
    <router-outlet></router-outlet>`,
})
export class LayoutComponent {

}
