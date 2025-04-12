import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inject Router for navigation
  const isAuthenticated = !!localStorage.getItem('sdAuth'); // Example: Check if token exists

  if (isAuthenticated) {
    return true; // Allow access if authenticated
  } else {
    router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } }); // Redirect to login
    return false; // Deny access
  }
};