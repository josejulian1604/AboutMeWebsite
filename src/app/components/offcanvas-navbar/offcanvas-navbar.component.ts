import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Offcanvas } from 'bootstrap';

@Component({
  selector: 'app-offcanvas-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './offcanvas-navbar.component.html',
  styleUrl: './offcanvas-navbar.component.scss'
})
export class OffcanvasNavbarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement) {
      new Offcanvas(offcanvasElement);
    }
  }
}
