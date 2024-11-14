import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: CartModel[] = [];
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.getCart();
  }
  getCart() {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }
}
