import { firebaseConfig } from './shared/config';
import { ROUTE } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ResetpasswordPageComponent } from './pages/resetpassword-page/resetpassword-page.component';
import { RouterModule } from '@angular/router';
import { MasterPageComponent } from './shared/masterPage/masterpage';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    SignupPageComponent,
    ResetpasswordPageComponent,
    MasterPageComponent,
    AccountPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
