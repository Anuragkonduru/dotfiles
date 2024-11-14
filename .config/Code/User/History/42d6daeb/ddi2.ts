import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProductsModel } from '../../shared/Models/productmodel';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductsModel[]> {
    return this.http
      .get<ProductsModel[]>(this.API_URL + 'Products/getAllProducts')
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
  getProductById(id: number): Observable<ProductsModel> {
    console.log('productId');
    console.log(id);
    return this.http.get<ProductsModel>(
      this.API_URL + 'Products/getProduct/' + id
    );
  }
}
