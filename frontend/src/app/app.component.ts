import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Variable pour afficher ou masquer le composant SignupComponent
showSignupComponent: boolean = false;

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