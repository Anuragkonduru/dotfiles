import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  standalone: true,
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css',
})
export class PromisesComponent {
  Promise = new Promise((resolve, reject) => {
    let a = 2;
    if (a == 2) {
      resolve('Sucess');
    } else {
      reject('Error');
    }
  });
  ngOnInIt() {
    this.Promise.then((response) => {
      Message = response;
    })
  }
  
}
