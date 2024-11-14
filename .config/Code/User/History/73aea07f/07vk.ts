import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private router: Router) {}
  goToUser(no: string) {
    console.log('here');
    this.router.navigate(['/users', no, 'bot3', 'recing'], {
      queryParams: { page: no, user: no },
      fragment: 'loading',
    });
  }
}
