import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SliderinfoService {
  Deals: any = [];
  constructor(private http: HttpClient) {
    this.Deals = http.get(process.env['API_URL'] + 'Products/getDealProducts');
  }
  getDeals() {
    return 
  }
}
