import { NgModule } from '@angular/core';
import { redirectIfAuthenticatedGuard } from '../../guards/redirect-if-authenticated.guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [redirectIfAuthenticatedGuard] }, // Login page
  { path: 'registration', component: RegistrationComponent, canActivate:[redirectIfAuthenticatedGuard] } // Registration page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
