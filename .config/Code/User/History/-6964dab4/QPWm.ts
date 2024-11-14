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
  Api = 'https://dummyjson.com/quotes';
  constructor(private http: HttpClient) {}
  httpCall() {
    this.getApi().subscribe({
      next: (response) => {
        console.log('response');
        console.log(response);
      },
      error: (error) => console.log(error),
    });
  }
  getApi() {
    return this.http.get(this.Api);
  }
}
