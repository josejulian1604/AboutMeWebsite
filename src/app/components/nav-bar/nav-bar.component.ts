import { Component } from '@angular/core';
import { OffcanvasNavbarComponent } from '../offcanvas-navbar/offcanvas-navbar.component';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [OffcanvasNavbarComponent, RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  showArrow: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showArrow = event.url !== '/entry';
      }
    });
  }
}
