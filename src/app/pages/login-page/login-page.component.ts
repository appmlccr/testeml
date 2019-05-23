import { User } from './../../model/user.model';
import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService) { }

  public user: User = {} as User;

  login(user: User) {
    const { email, password } = user;
    this.loginService.loginWithEmail({ email, password })
      .then((res) => {
        this.toastr.success('Login efetuado com Sucesso!', 'Login')
        this.router.navigate(['accounts']);
      })
      .catch((err) => err);
      // this.toastr.error('Usuário ou Senha inválido', 'Erro');
  }


}
