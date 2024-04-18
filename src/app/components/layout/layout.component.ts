import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";
import { ExperienceComponent } from "../experience/experience.component";
import { NavigationEnd, Router } from '@angular/router';
import { PersonalDataService } from '../../servces/personal-data.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [NavigationComponent, HomeComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, FooterComponent, CommonModule],
    providers: [PersonalDataService]
})

export class LayoutComponent {
    loading = true;
    constructor(private router: Router, private personalDataService: PersonalDataService){}

    scrollToFragment(fragment: string): void {
        const element = document.querySelector('#' + fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
      
    ngOnInit() {
        this.personalDataService.loadData().subscribe(() => {
            this.loading = false;
        });        
        
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
            const tree = this.router.parseUrl(this.router.url);
            if (tree.fragment) {
                this.scrollToFragment(tree.fragment);
            }
            }
        });
    }
}