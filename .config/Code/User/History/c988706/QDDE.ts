import { Component } from '@angular/core';
import { ProductsModel } from '../../../shared/Models/productmodel';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: ProductsModel[] = [];
  constructor(private productService: ProductsService) {}
}
