import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http = Inject(HttpClient);

  API_URL = 'http://localhost:3000/';

  login(userName: number, password: string): Observable<boolean> {
    const credentials = this.http.SetParams({
      userName: userName,
      password: password,
    });
    return this.http.get(this.API_URL + 'Products/getProduct/', credentials);
  }
  signup(userName: number, password: string): Observable<boolean> {
    const credentials = this.http.SetParams({
      userName: userName,
      password: password,
      firstName: 'us',
      lastName: 'er',
      telephone: '1234567890',
    });
    return this.http.get(this.API_URL + 'Products/getProduct/', credentials);
  }
}
