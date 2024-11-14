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
    return http.get<ProductsModel[]>(this.API_URL + 'Products/getAllProducts').pipe(map((product:any)=>{}));
  }
  // getProductById(id:number): Observable<ProductsModel[]> {
  //   return http.get<ProductsModel[]>(this.API_URL + 'Products/getProduct/'+id);
  // }
}
