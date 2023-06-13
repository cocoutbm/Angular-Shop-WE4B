import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CartComponent } from '../cart/cart.component';
import { User } from '../models/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user!: string
  currentUser: any 
  constructor(private userService : UserService){ 
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('currentUser'))
    //récupération du user connecté dans le localStorage du navigateur
    const userString = localStorage.getItem('currentUser')
    if(userString){
      //converstion des données du user sous forme de chaine de caractère en objet
      this.currentUser = JSON.parse(userString)
    }
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  // Voir pour ajouter un moyen de récupérer le currentUser en user car là ca récupère le tableau entier
  isVendeur(): void {
    if (localStorage.getItem('currentUser') !== null){
      localStorage.setItem(this.user, JSON.stringify('currentUser'));
      console.log()
    }
  }

  logout(): void {
    this.userService.logout();
  }
  
}