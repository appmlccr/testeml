import { ResetpasswordPageComponent } from './pages/resetpassword-page/resetpassword-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { Routes } from '@angular/router';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

export const ROUTE: Routes = [
    // { path: '',
    //     component: MasterPageComponent,
    //     children: [
    //         {path: 'account', component: AccountPageComponent}
    //     ]
    // },
    {path: '', component: LoginPageComponent, pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent },
    {path: 'signup', component: SignupPageComponent},
    {path: 'reset-password', component: ResetpasswordPageComponent},
]