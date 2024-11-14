import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { HomeComponent } from './layouts/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'product',
    loadChildren:()=> import('./features/products/products.module').then(m=> m.ProductsModule)
  }
  { path: 'explore', component: ProductListComponent },
  { path: 'explore/:id', component: ProductDetailsComponent },
];
