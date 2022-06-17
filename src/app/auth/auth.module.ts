import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouting } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRouting
  ]
})
export class AuthModule { }
