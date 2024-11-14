import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CartModel } from '../Models/cartmodel';
import { ProductsModel } from '../Models/productmodel';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  API_URL = environment.API_URL;
  items: CartModel[] = [];
  cartItems = new Subject<CartModel[]>();

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchCartData().subscribe((cart) => {
      this.items.push(...cart);
      this.cartItems.next([...this.items]);
    });
  }
  //Fetch The Cart Data from The Server
  private fetchCartData(): Observable<CartModel[]> {
    console.log(this.API_URL);
    return this.http.get<CartModel[]>(this.API_URL + 'Cart/getCart').pipe(
      map((response: any[]) =>
        response.map((item) => ({
          productId: item.product_id,
          qty: item.qty,
          unitPrice: item.unit_price,
          totalPrice: item.total_price,
          createdAt: item.created_at,
          modifiedAt: item.modified_at,
        }))
      )
    );
  }
  getCartItems(): Observable<CartModel[]> {
    this.fetchCartData().subscribe((cart) => {
      this.items.push(...cart);
      console.log('this.items');
      console.log(this.items);
      this.cartItems.next([...this.items]);
    });
    return this.cartItems.asObservable();
  }
  addToCart(product: ProductsModel) {
    const CartItem = {
      productId: product.productId,
      qty: 1,
      unitPrice: product.price,
      totalPrice: product.price,
      createdAt: new Date(),
      modifiedAt: new Date(),
    };
    return this.http.post(this.API_URL + 'Cart/postCart', CartItem);
    // this.fetchCartData().subscribe((cart) => {
    //   this.items.push(...cart);
    //   this.cartItems.next([...this.items]);
    // });
  }
  adjustItemQty(index: number, Qty: number) {
    this.items[index].qty += Qty;
    if (this.items[index].qty <= 0) {
      this.RemoveItem(this.items[index].productId);
    }
  }
  clearCart() {
    this.items = [];
    return this.cartItems.next([...this.items]);
  }
  RemoveItem(id: number) {
    this.items.splice(this.findIndexWithId(id), 1) as CartModel[];

    return this.cartItems.next([...this.items]);
  }
  findIndexWithId(id: number): number {
    let index = this.items.findIndex((obj) => obj.productId === id);
    console.log(this.items);
    console.log('index');
    console.log(index);
    return index;
  }
}

// cartRoutes.get('/getCart/:id', isValidToken, getCartItems);
// cartRoutes.post('/postCart/:id', isValidToken, postCartItems);

// const item_data: cartModel = {
//   product_id: req.body.productId,
//   username: req.userName,
//   qty: req.body.qty,
//   unit_price: req.body.unitPrice,
//   total_price: req.body.totalPrice,
//   created_at: new Date(req.body.createdAt),
//   modified_at: new Date(req.body.modifiedAt),
// };
// export interface cartModel {
//   product_id: number;
//   username: string;
//   qty: number;
//   unit_price: number;
//   total_price: number;
//   created_at: Date;
//   modified_at: Date;
//   ProductsModel?: ProductsModel;
// }
