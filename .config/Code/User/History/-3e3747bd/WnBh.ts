import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getCookie(name: string): string | null {
    const matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
          '=([^;]*)'
      )
    );
    return matches ? decodeURIComponent(matches[1]) : null;
  }

  async isLoggedIn() {
    const token = this.getCookie('auth_token');
    console.log('token');
    console.log(token);
    if (!token) {
      return false;
    }
    return true;
  }
}
