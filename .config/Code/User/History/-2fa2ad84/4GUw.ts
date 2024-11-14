import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingComponent } from '../../../layouts/loading/loading.component';
import { ProductsModel } from '../../../shared/Models/productmodel';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  isLoading = true;
  product!: ProductsModel;
  productId: any = '';
  constructor(
    private productService: ProductsService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      console.log(this.productId);
      this.getProductDetails();
      this.isLoading = false;
    });
  }
  getProductDetails() {
    this.productService.getProductById(+this.productId).subscribe((product) => {
      this.product = product;
      console.log('product');
      console.log(product);
    });
  }
}
