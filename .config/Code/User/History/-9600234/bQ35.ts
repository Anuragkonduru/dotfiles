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
  value = 1;
  Message = '';

  AsyncTask() {
    let promise = new Promise<string>((resolve, reject) => {
      console.log(this.value % 2 == 0);
      if (this.value % 2 == 0) {
        resolve('Success');
      } else {
        reject('Error');
      }
    });
    return promise;
  }
  sendToPromise() {
    this.AsyncTask()
      .then((response) => {
        this.Message = response;
      })
      .catch((response) => {
        this.Message = response;
      });
  }
}
