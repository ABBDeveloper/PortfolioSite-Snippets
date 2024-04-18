import { Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { PersonalDataService } from '../../servces/personal-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  personalData = this.personalDataService.getPersonalData();
  @ViewChild('typingElement') typingElement!: ElementRef<HTMLDivElement> ;

  constructor(private personalDataService: PersonalDataService) {}  

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.typingElement.nativeElement.classList.add('start-typing');
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    if(this.typingElement){
      observer.observe(this.typingElement.nativeElement);
    }
  }
}
