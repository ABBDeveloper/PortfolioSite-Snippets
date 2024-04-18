import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../servces/auth.service';
import { RouterModule } from '@angular/router';
import { PersonalDataService } from '../../servces/personal-data.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent {
  personalData = this.personalDataService.getPersonalData();
  isHamburgerMenuOpen: boolean = false;

  constructor( private authService : AuthService, private personalDataService: PersonalDataService){}

  toggleMenu(){
    this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
  }

  closeMenu(){
    this.isHamburgerMenuOpen = false;
  }

  logout(){
    this.authService.logout();
  }
}
