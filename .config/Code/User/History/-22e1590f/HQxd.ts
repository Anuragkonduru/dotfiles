import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  goToUser(no: string) {
    this.router.navigate([no, 'bot3', 'recing'], {
      queryParams: { page: no, user: no },
      fragment: 'loading',
    });
  }
}
