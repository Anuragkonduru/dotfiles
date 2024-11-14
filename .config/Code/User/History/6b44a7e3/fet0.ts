import { Component, OnInit } from '@angular/core';
import { CartModel } from '../../shared/Models/cartmodel';
import { CartService } from '../../shared/cartservice/cart.service';
import { LoadingComponent } from '../../layouts/loading/loading.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
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
