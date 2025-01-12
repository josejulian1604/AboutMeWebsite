import { Component } from '@angular/core';
import { OffcanvasNavbarComponent } from '../offcanvas-navbar/offcanvas-navbar.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [OffcanvasNavbarComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  
}
