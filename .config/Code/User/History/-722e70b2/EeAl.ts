import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';

const routes: Routes = [{ path: 'cart', component: CartComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CartModule {}
