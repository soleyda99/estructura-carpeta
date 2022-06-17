import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'forgot', component: ForgotComponent },
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '**', redirectTo: 'login' }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class AuthRouting { }
