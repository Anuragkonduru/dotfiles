import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsModel } from '../../../shared/Models/productmodel';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product!: ProductsModel;
  productId = 0;
  constructor(
    private productService: ProductsService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params) => {
      this.productId = params['id'];
    this.getProductDetails(this.productId);
    });
  }
  getProductDetails() {
    this.productService.getProductById(this.productId).subscribe((product) => {
      this.product = product;
      console.log('product');
      console.log(product);
    });
  }
}
