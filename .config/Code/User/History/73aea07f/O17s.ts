import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

interface  User
{
  id: number;
  name: string;
  job: string
}



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user!:User;
  constructor(private route:Router,private activeRoute:ActivatedRoute){

  }
  ngOnInit(){
  // this.user ={
      // id:this.activeRoute.snapshot.params['id'],
      // name:this.activeRoute.snapshot.params['name'],
      // job:this.activeRoute.snapshot.params['job']
  // }
  this.activeRoute.params.subscribe((params:Params)=>{
  this.user ={
      id:params['id'],
      name:params['name'],
      job:params['job']
  };
  })
  }
  goToAdmin(){
    this.route.navigate(['/admin']);

  }
}
