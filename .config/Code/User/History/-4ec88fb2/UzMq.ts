import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { HomeComponent } from './layouts/home/home.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailsComponent },
];

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
