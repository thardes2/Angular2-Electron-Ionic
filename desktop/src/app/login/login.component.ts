import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user';
declare var fs;
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  private isLogged = false;

  constructor(private userService: UserService, private router: Router) {
    //this.isLogged = userService.isLoggedIn();
  }

  submitLogin() {
    console.log(fs);
    console.log("Login click");
  }
  register() {
  }
  submitLogout() {
    this.userService.logout();
    this.isLogged = false;
  }

}
