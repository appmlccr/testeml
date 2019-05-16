import { User } from './../../model/user.model';
import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  public user: User = {} as User;

  login(user: User) {
    const { email, password } = user;
    this.loginService.loginWithEmail({ email, password })
      .then((res) => {
        this.router.navigate(['signup']);
      })
      .catch((err) => err);
  }

}
