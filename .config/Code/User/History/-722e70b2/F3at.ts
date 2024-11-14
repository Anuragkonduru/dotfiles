import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartModel } from '../../shared/Models/cartmodel';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CartModule {
  cartItems: CartModel[] = [];
  constructor(private cartService:CartService) {
    
  }
}
