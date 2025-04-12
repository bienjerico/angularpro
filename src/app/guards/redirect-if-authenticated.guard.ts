import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const redirectIfAuthenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inject Router for navigation
  const isAuthenticated = !!localStorage.getItem('sdAuth'); // Check if token exists

  if (isAuthenticated) {
    router.navigate(['/dashboard']); // Redirect to dashboard if already logged in
    return false; // Deny access to the login page
  }
  return true; // Allow access if not authenticated
};