import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {User} from '../UserModel'
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implemets OnInit {
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
      this.user.page = queryParams['page'];
      console.log(queryParams['user']);
    });
    this.activeRoute.fragment.subscribe((fragments) => {
      console.log(fragments);
    });
  }
}
