import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsModel } from './Models/productmodel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductdealsService {
  Deals: ProductsModel[] = [];
  constructor(private http: HttpClient) {
   this.Deals= http
      .get(process.env['API_URL'] + 'Products/getDealProducts')
      .pipe( map(product) => {
        productId: product.productId,
        productname: product.productname,
        description: product.description,
        categoryId: product.category_id,
        inventoryId: product.inventory_id,
        price: product.price,
        discountId: product.discount_id,
        reviewId: product.review_id,
        createdAt: product.created_at,
        modifiedAt: product.modified_at,
        images:
      });
  }
  getDeals() {
    return this.Deals;
  }
}
