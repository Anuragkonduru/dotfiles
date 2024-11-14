import { Component, OnInit } from '@angular/core';
import { ProductsModel } from '../../../shared/Models/productmodel';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit{
  products: ProductsModel[] = [];
  constructor(private productService: ProductsService) {}
}
