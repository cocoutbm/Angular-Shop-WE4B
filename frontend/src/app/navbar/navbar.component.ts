import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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

  logout(): void {
    this.userService.logout();
   
  }
  
}