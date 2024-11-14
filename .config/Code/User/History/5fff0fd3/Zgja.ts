import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLoggedIn = false;
  constructor(private authService: AuthService) {
    authService.isLoggedIn().then((response) => {
      this.isLoggedIn = response;
    });
  }
  Logout() {
    authService.
  }
}
