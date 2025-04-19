import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard'; // Import the auth guard
import { DashboardComponent } from './features/dashboard/components/dashboard/dashboard.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent }, // Landing page
    { path: 'auth', loadChildren: () => import('./../app/core/auth/auth.module').then(m => m.AuthModule) },
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }, // Dashboard page
    { path: '**', redirectTo: '' } // Redirect unknown paths to the landing page
];
