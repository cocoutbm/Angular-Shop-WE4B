import { Component } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private auth: AuthentificationService) {}

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
}
