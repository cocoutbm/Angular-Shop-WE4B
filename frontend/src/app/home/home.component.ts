import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    // Variable pour afficher ou masquer le composant SignupComponent
    showSignupComponent: boolean = true;

    constructor(private router: Router) {
      // Souscription aux événements de navigation du router
      router.events.subscribe((event) => {
        // Vérifie si l'événement correspond à une fin de navigation
        if (event instanceof NavigationEnd) {
          // Vérifie si l'URL actuelle est '/signup'
          this.showSignupComponent = event.url === '/signup';
        }
      });
    }
}
