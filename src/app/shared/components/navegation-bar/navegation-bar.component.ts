import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { ScreenInformationService } from '../../services/screen-information/screen-information.service';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navegation-bar',
  standalone: true,
  templateUrl: './navegation-bar.component.html',
  styleUrls: ['./navegation-bar.component.scss'],
  imports: [FontAwesomeModule, NgIf, RouterModule],
})
export class NavegationBarComponent {
  icons = {
    whish: faBagShopping,
    sun: faSun,
    moon: faMoon,
    search: faMagnifyingGlass,
    heart: faHeart,
  };

  constructor(public screen: ScreenInformationService) {}
}
