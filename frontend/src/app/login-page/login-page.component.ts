import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router, private userService : UserService) {}

  login(): void {

    this.userService.getPasswordByEmail(this.email, user => {
        if(this.password == user.password) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['/']);
          console.log('success')
          this.userService.setSessionId(user.id)
          localStorage.setItem('id_user_isconnected', user.id.toString());

        } else {
          console.log('error')
        }
    });

  }
}
