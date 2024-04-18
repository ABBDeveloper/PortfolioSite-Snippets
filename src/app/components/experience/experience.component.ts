import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonalDataService } from '../../servces/personal-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})

export class ExperienceComponent {
  personalData = this.personalDataService.getPersonalData();

  constructor(private personalDataService: PersonalDataService) {}
}