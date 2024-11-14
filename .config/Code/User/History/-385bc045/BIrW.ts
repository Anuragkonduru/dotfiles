import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const loggedIn = authService.isLoggedIn();
  if (loggedIn) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
