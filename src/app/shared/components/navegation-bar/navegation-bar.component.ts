import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBagShopping, faMagnifyingGlass, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navegation-bar',
  standalone: true,
  templateUrl: './navegation-bar.component.html',
  styleUrls: ['./navegation-bar.component.scss'],
  imports: [FontAwesomeModule],
})
export class NavegationBarComponent {
  icons = {
    whish: faBagShopping,
    sun: faSun,
    moon: faMoon,
    search: faMagnifyingGlass
  };
}
