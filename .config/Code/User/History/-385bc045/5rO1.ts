import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Inject } from '@angular/core';

const authService=Inject(AuthService)
const router=Inject(Router)

export const authGuard: CanActivateFn = (route, state) => {
   const loggedIn = authService.isLoggedIn()
    if (loggedIn) {
      return true;
    }
    else {
      router.navigate(['/login'])
      return false
    }
    }
  }
  return true;
};
