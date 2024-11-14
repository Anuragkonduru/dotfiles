import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  standalone: true,
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css',
})
export class PromisesComponent {
  value = 0;
  Message = '';
  Promise = new Promise((resolve, reject) => {
    if (this.value % 2 === 0) {
      resolve('Sucess');
    } else {
      reject('Error');
    }
  });
  ngOnInIt() {
    this.Promise.then((response) => {
      this.Message = response;
    });
  }
  sendToPromise() {}
}
