import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map,pipe, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateFn {
  constructor(private authService: AuthService,private router:Router) {}
  CanActiveFn(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const loggedIn = this.authService.isLoggedIn()
    if (loggedIn) {
      return true;
    }
    else {
      this.router.navigate(['/login'])
    }
    }
  }
} 
