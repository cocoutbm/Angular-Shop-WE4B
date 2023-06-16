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
  isVendeur!: boolean
  currentUser!: User
  constructor(private userService : UserService){ 

    var currentUserString = localStorage.getItem('currentUser');
    if (currentUserString !== null) {
      this.currentUser = JSON.parse(currentUserString);
      if(this.currentUser!== null){
        if(this.currentUser.fonctionnalite==='vendeur'){
          this.isVendeur=true;
        } else {
          this.isVendeur = false;
        }
      }
    }
  }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }


  logout(): void {
    this.userService.logout();
  }
  
}