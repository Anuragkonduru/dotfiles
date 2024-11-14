import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-promises',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css',
})
export class PromisesComponent {
  value = 0;
  Message = '';
  Promise = new Promise<string>((resolve, reject) => {
    if (this.value % 2 === 0) {
      resolve('Success');
    } else {
      reject('Error');
    }
  });
  sendToPromise() {
    this.Promise.then((response, error) => {
      this.Message = response;
      this.Message = error;
      console.log(response);
    });
  }
}
