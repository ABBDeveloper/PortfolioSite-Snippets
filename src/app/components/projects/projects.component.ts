import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonalDataService } from '../../servces/personal-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  personalData = this.personalDataService.getPersonalData();

  constructor(private personalDataService: PersonalDataService) {}

  get projectPhotoUrls(): string[]  {
    return this.personalDataService.getProjectPhotoUrls();
  }

  handleLinkClick(event: MouseEvent, link: string): void {
    if (link === 'COMING_SOON') {
      event.preventDefault();  
    }
  }
}
