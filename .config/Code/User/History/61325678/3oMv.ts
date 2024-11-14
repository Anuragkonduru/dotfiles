import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '/explore', component: ProductDetailsComponent },
  { path: '/explore/:id', component: ProductListComponent },
];
