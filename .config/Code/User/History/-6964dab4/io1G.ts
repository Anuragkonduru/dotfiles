import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
interface QuoteResponse {
  id: number;
  quote: string;
  author: string;
}
@Component({
  selector: 'app-http',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css',
})
export class HttpComponent {
  Api = 'https://dummyjson.com/quotes/random';
  quote = 'To Be Happy We Must Not Be Too Concerned With Others.';
  constructor(private http: HttpClient) {}
  httpCall() {
    this.getApi().subscribe({
      next: (response) => {
        this.quote = response.quote;
        console.log(this.quote);
      },
      error: (error) => console.log(error),
    });
  }
  getApi() {
    return this.http.get<QuoteResponse>(this.Api);
  }
}
