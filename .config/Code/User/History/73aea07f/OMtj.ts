import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
  job: string;
  page?:string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
 
}
