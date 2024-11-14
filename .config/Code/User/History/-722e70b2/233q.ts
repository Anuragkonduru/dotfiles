import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cart', component: CartComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule,  exports:[RouterModule]
.forhild(routes)],
  exports:[RouterModule]
})
export class CartModule {}
