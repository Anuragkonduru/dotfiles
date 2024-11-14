import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsModel } from './Models/productmodel';

@Injectable({
  providedIn: 'root',
})
export class ProductdealsService {
  Deals: ProductsModel[] = [];
  constructor(private http: HttpClient) {
    http
      .get(process.env['API_URL'] + 'Products/getDealProducts')
      .pipe( Map(deals) => {
        this.Deals = deals;
      });
  }
  getDeals() {
    return this.Deals;
  }
}
