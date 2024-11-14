import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductsModel } from '../../shared/Models/productmodel';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  API_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductsModel[]> {
    return this.http
      .get<ProductsModel[]>(this.API_URL + 'Products/getAllProducts', {
        withCredentials: true,
      })
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
    return this.http.get<ProductsModel>(
      this.API_URL + 'Products/getProduct/' + id
    );
  }
}
