import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  API_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  login(userName: number, password: string): Observable<string> {
    const credentials = new HttpParams()
      .set('userName', userName)
      .set('password', password);

    return this.http.post<string>(this.API_URL + 'login', {
      params: credentials,
    });
  }
  signup(
    userName: string,
    password: string,
    firstName: string,
    lastName: string,
    telephone: string
  ): Observable<string> {
    const credentials = {
      userName: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
      telephone: telephone,
      createdAt: new Date(),
      modifiedAt: new Date(),
    };
    return this.http.post<string>(this.API_URL + 'signup', credentials, {
      withCredentials: true,
    });
  }
}
