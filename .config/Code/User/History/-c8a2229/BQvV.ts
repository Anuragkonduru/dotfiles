import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  API_URL = 'http://localhost:3000/';
  constructor(private http :HttpClient) {}
  login(userName: number, password: string): Observable<string> {
    const credentials = this.http.SetParams({
      userName: userName,
      password: password,
    });
    return this.http.get(this.API_URL + 'signup', credentials);
  }
  signup(
    userName: string,
    password: string,
    firstName: string,
    lastName: string,
    telephone: string
  ): Observable<boolean> {
    const credentials = this.http. .SetBody({
      userName: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
      telephone: telephone,
      createdAt: new Date(),
      modifiedAt: new Date(),
    });
    return this.http.post(this.API_URL + 'signup', credentials);
  }
}
