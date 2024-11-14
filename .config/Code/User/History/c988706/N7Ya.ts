import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from '../../../layouts/loading/loading.component';
import { ProductsModel } from '../../../shared/Models/productmodel';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, LoadingComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  isLoading = true;
  products: ProductsModel[] = [];
  constructor(private productService: ProductsService) {}
  ngOnInit() {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
      this.isLoading = false;
    });
  }
}
