import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductsModel } from './Models/productmodel';

@Injectable({
  providedIn: 'root',
})
export class ProductdealsService {
  Deals: ProductsModel[] = [];
  constructor(private http: HttpClient) {
   this.Deals = this.http
     .get(process.env['API_URL'] + 'Products/getDealProducts')
     .pipe(map((product) => {
       productId: product.productId,
         productname; product.productname,
           description; product.description,
             categoryId; product.categoryId,
               inventoryId; product.inventoryId,
                 price; product.price,
                   discountId; product.discountId,
                     reviewId; product.reviewId,
                       createdAt; product.createdAt,
                         modifiedAt; product.modifiedAt,
                           images; product.images;
     })) as unknown as ProductsModel[];
  }
  getDeals() {
    return this.Deals;
  }
}

