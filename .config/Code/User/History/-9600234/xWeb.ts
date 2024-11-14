import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  standalone: true,
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css',
})
export class PromisesComponent {
  let Promise = new Promise((resolve, reject) => {
    let a = 2;
    if (a == 2) {
      resolve()
    }
  })
}
