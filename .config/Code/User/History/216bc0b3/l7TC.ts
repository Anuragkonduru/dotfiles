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
  selectedNo = 0;
  dealProducts: ProductsModel[] = [];
  currentProduct!: ProductsModel;
  dealsCount: number[] = [];
  constructor(private dealsService: ProductdealsService) {}
  async ngOnInit() {
    this.dealsService.getDeals().subscribe((dealProducts) => {
      this.dealProducts = dealProducts;
      this.currentProduct = this.dealProducts[0];
      this.dealsCount = Array.from(
        { length: this.dealProducts.length },
        (_, i) => i + 1
      );
      console.log(this.dealProducts);
    });
    setInterval(this.changeImage, 6000);
  }
  changeImage = () => {
    if (this.selectedNo < this.dealsCount.length - 1) {
      this.selectedNo++;
    } else {
      this.selectedNo = 0;
    }
    this.currentProduct = this.dealProducts[this.selectedNo];
    console.log(this.currentProduct);
  };
  selectDeal(dealNo: number) {
    this.currentProduct = this.dealProducts[dealNo];
  }
}
