import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private http: HttpClient, private fireAtuh: AngularFireAuth) { }

  loginWithEmail(user: User) {
    const { email, password } = user;
    const userCredentials = firebase.auth.EmailAuthProvider.credential(email, password);
    return this.fireAtuh.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.fireAtuh.auth.signOut().then(res => this.router.navigate(["login"]));
  }


}
