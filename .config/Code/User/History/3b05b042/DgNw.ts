import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsModel } from './Models/productmodel';
import 'dotenv/config';
@Injectable({
  providedIn: 'root',
})
export class ProductdealsService {
  API_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getDeals(): Observable<ProductsModel[]> {
    return this.http
      .get<ProductsModel[]>(process.env['API_URL'] + 'Products/getDealProducts')
      .pipe(
        map((response: any[]) =>
          response.map((product) => ({
            productId: product.productId,
            productname: product.productname,
            description: product.description,
            categoryId: product.categoryId,
            inventoryId: product.inventoryId,
            price: product.price,
            discountId: product.discountId,
            reviewId: product.reviewId,
            createdAt: product.createdAt,
            modifiedAt: product.modifiedAt,
            images: product.images,
          }))
        )
      );
  }
}
