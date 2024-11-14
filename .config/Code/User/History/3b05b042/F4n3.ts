import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsModel } from './Models/productmodel';

@Injectable({
  providedIn: 'root',
})
export class ProductdealsService {
  API_URL = 'http://localhost:3000/Products/getDealProducts';
  constructor(private http: HttpClient) {}
  getDeals(): Observable<ProductsModel[]> {
    return this.http.get<ProductsModel[]>(this.API_URL).pipe(
      map((product: any) => {
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
          images: product.images
        }
      )
    );
  }
}
