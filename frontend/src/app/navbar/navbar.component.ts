import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private userService : UserService){}

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  logout(): void {
    this.userService.logout()
  }
}