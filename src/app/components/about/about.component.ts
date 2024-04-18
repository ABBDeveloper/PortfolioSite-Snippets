import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonalDataService } from '../../servces/personal-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, AfterViewInit  {

  @ViewChild('sectionRef') sectionRef: ElementRef | undefined;
  personalData = this.personalDataService.getPersonalData();
  BEGINING_YEAR = this.personalData.about.beginingYear;  
  experienceYears = 0;
  startYear = 0;

  constructor(private personalDataService: PersonalDataService) {}

  ngOnInit(){
    this.experienceYears = this.startYear;
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.experienceYears = 0;

          this.animateYears();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.7 });

    if (this.sectionRef) {
      observer.observe(this.sectionRef.nativeElement);
    }
  }

  animateYears() {
    const endYear = this.calculateExperienceYears();
    const interval = setInterval(() => {
      this.experienceYears++;
      if (this.experienceYears >= endYear) {
        clearInterval(interval);
      }
    }, 250);
  }

  calculateExperienceYears(): number{
    const actualYear = new Date().getFullYear();
    return actualYear - this.BEGINING_YEAR;
  }
}