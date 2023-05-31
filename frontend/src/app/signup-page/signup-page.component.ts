import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  constructor(private router: Router) {}

  createAccount() {
    // Logique de création de compte

    // Affichage du message de compte créé
    console.log('Compte créé avec succès !');
  }
}