import { Inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Adjust path if necessary

@Injectable({
  providedIn: 'root', // Assuming AuthService is a singleton service
})
export class AuthGuard implements CanActivateFn {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const loggedIn = this.authService.isLoggedIn(); // Assuming isLoggedIn returns boolean
    if (loggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
