import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { Inject } from '@angular/core';

AuthService=Inject(AuthService)


export const authGuard: CanActivateFn = (route, state) => {
   const loggedIn = this.authService.isLoggedIn()
    if (loggedIn) {
      return of(true);
    }
    else {
      this.router.navigate(['/login'])
      return of(false)
    }
    }
  }
  return true;
};
