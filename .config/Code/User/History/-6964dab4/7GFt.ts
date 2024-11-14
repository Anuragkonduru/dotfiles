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
  ApiKey =
    'live_qFWByKNnkZP52yCXd3TWVYFoie36d62aXmnB0FYQQ0VrARnESyNYMUpv8tu9faXp';
  constructor(private http: HttpClient) {}
  httpCall() {
    this.getApi().subscribe({
      next: (response) => {
        console.log('response');
        console.log(response);
      },
      // error: (error) => console.log(error),
    });
  }
  getApi() {
    return this.http.get(this.Api + '404' + '.json');
  }
}
