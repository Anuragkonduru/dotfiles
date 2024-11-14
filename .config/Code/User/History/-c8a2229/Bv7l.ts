import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../shared/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient,private loginService:AuthService) {}
  login(userName: number, password: string): Observable<string> {
    const credentials = {
      userName: userName,
      password: password,
    };

    return this.http.post<string>(this.API_URL + 'login', credentials);
  }
  async inLogin(){
    const loggedIn = await this.loginService.isLoggedIn();
    if (loggedIn) {
      loggedIn
    }
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
    return this.http.post<string>(this.API_URL + 'signup', credentials);
  }

}
