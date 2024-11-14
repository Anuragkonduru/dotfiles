import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductsModel } from './Models/productmodel';

@Injectable({
  providedIn: 'root',
})
export class ProductdealsService {
  Deals: ProductsModel[] = [];
  constructor(private http: HttpClient) {}
  getDeals() {
    this.http
      .get<ProductsModel[]>(`${process.env['API_URL']}Products/getDealProducts`)
      .pipe(
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
      )
      .subscribe((deals) => {
        this.Deals = deals;
        console.log(this.Deals);
      });
    return this.Deals;
  }
}
