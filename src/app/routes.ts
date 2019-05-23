import { ResetpasswordPageComponent } from './pages/resetpassword-page/resetpassword-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { Routes } from '@angular/router';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MasterPageComponent } from './shared/masterPage/masterpage';
import { AccountPageComponent } from './pages/account-page/account-page.component';

export const ROUTE: Routes = [
    {path: 'login', component: LoginPageComponent },
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'signup', component: SignupPageComponent},
    {path: 'reset-password', component: ResetpasswordPageComponent},
    {
        path: '',
        component: MasterPageComponent,
        children: [
            {path: 'accounts', component: AccountPageComponent}
        ]
    },
]