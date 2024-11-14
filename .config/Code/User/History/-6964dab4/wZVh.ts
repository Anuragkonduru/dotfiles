import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css',
})
export class HttpComponent {
  Api = 'https://http.dog/';
  constructor(private http: HttpClient) {}
  httpCall() {
    this.http.get<any>(this.Api + '404' + '.jpg').subscribe({
      next: (response) => console.log(response),
      // error: (error) => console.log('error' + error),
    });
    // this.http.get(this.Api + '404' + '.jpg').pipe((response) => {
    //   console.log(response);
    // });
  }
}
