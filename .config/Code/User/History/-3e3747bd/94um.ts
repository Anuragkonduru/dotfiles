import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isLoggedIn() {
    const token = awaitlocalStorage.getItem('auth_token') || '';
    if (!token || token === '') {
      return false;
    }
    return true;
  }
}
