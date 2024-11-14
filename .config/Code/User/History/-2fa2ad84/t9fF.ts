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
  productId :string='';
  constructor(
    private productService: ProductsService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      console.log(params);
      this.getProductDetails();
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
