import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '/explore', component: ProductListComponent },
  { path: '/explore/:id', component: ProductListComponent },
];
