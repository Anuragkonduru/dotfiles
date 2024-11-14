import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  async isLoggedIn() {
    const token = await localStorage.getItem('auth_token') || '';
    if (!token || token === '') {
      return false;
    }
    return true;
  }
}
