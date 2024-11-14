import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductsModel } from './Models/productmodel';

@Injectable({
  providedIn: 'root',
})
export class ProductdealsService {
  API_URL = 'http://localhost:3000/Products/getDealProducts';
  Deals: any = [];
  constructor(private http: HttpClient) {}
  async getDeals(): Promise<ProductsModel[]> {
    this.Deals = await this.http.get<ProductsModel[]>(this.API_URL).pipe(
      map((products: any[]) =>
        products.map((product) => ({
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
    ).toPromise();

    return this.Deals;
  }
}
