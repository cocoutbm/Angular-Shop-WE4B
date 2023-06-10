import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  public user : User

  constructor(private service: UserService, private router: Router) {
    this.user = new User(this.service.users_length+1, "", "", "", "", "", "");
  }

  createAccount() {
    this.service.addUser(this.user).subscribe(data => {
      this.user = data
      console.log(this.user)
    })

    this.router.navigateByUrl('/login')

    // Affichage du message de compte créé
    console.log('Compte créé avec succès !');
  }
}