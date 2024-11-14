import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateFn {
  constructor(private authService: AuthService,private router:Router) {}
  CanActiveFn(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean |undefined | UrlTree> {
    const loggedIn = this.authService.isLoggedIn()
    if (loggedIn) {
      return of(true);
    }
    else {
      this.router.navigate(['/login'])
      return false
    }
    }
  }
} 
