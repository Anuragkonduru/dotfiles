import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  job: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user!: User;
  constructor(private route: Router, private activeRoute: ActivatedRoute) {}
  ngOnInit() {

    this.activeRoute.params.subscribe((params: Params) => {
      this.user = {
        id: params['id'],
        name: params['name'],
        job: params['job'],
      };
    });
  }
  goToAdmin() {
    this.route.navigate(['/admin']);
  }
}
