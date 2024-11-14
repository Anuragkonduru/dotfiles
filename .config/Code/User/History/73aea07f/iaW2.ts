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
    //Get Static Snapshot of Routes
    // this.user ={
    // id:this.activeRoute.snapshot.params['id'],
    // name:this.activeRoute.snapshot.params['name'],
    // job:this.activeRoute.snapshot.params['job']
    // }
    this.activeRoute.params.subscribe((params: Params) => {
      this.user = {
        id: params['id'],
        name: params['name'],
        job: params['job'],
      };
    });
    this.activeRoute.queryParams.subscribe((queryParams) => {
       console.log(queryParams.page);
    });
    this.activeRoute.fragment.subscribe((fragment) => {
      console.log(fragment);
    });
  }
  goToAdmin() {
    this.route.navigate(['/admin']);
  }
}
