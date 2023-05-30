import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  createAccount() {
    // Logique de création de compte

    // Affichage du message de compte créé
    console.log('Compte créé avec succès !');
  }
}
