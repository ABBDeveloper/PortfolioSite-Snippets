import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonalDataService } from '../../servces/personal-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  personalData = this.personalDataService.getPersonalData();

  constructor(private personalDataService: PersonalDataService) {}
}
