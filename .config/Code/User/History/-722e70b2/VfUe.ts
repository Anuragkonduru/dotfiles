import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartModel } from '../../shared/Models/cartmodel';
import { CartService } from '../../shared/cartservice/cart.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CartModule implements OnInit {
  cartItems: CartModel[] = [];
  constructor(private cartService:CartService) {
    
  }
}
