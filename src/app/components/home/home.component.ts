import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../navigation/navigation.component";
import { RouterModule } from '@angular/router';
import { PersonalDataService } from '../../servces/personal-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  personalData = this.personalDataService.getPersonalData();

  constructor(private personalDataService: PersonalDataService) {}
  
  get cvUrl(): string | null {
    return this.personalDataService.getCvUrl();
  }

  get cvPhotoUrl(): string | null {
    return this.personalDataService.getCvPhotoUrl();
  }
}
