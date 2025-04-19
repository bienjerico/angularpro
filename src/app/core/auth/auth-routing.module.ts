import { NgModule } from '@angular/core';
import { redirectIfAuthenticatedGuard } from './auth.guard'; // Import the redirect guard
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; // Import the login component
import { RegistrationComponent } from './pages/registration/registration.component'; // Import the registration component

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [redirectIfAuthenticatedGuard] }, // Login page
  { path: 'registration', component: RegistrationComponent, canActivate:[redirectIfAuthenticatedGuard] } // Registration page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
