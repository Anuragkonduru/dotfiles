import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsModel } from '../../shared/Models/productmodel';
import { ProductdealsService } from '../../shared/productdeals.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  i = 0;
  dealProducts: ProductsModel[] = [];
  currentProduct: ProductsModel | undefined;
  dealsCount: number[] = [];
  constructor(private dealsService: ProductdealsService) {}
  async ngOnInit() {
    this.dealsService.getDeals().subscribe((dealProducts) => {
      this.dealProducts = dealProducts;
      this.currentProduct = this.dealProducts[0];
      this.dealsCount = new Array(this.dealProducts.length).fill(0);
      console.log(this.dealProducts);
    });
    setInterval(this.changeImage, 6000);
  }
  changeImage = () => {
    if (this.i < this.dealsCount.length - 1) {
      this.i++;
    } else {
      this.i = 0;
    }
    this.currentProduct = this.dealProducts[this.i];
    console.log(this.currentProduct);
  };
}
