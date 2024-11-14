import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsModel } from '../../shared/Models/productmodel';
import { ProductdealsService } from '../../shared/productdeals.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle, RouterLink, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  isLoading = true;
  selectedNo = 0;
  dealProducts: ProductsModel[] = [];
  currentProduct!: ProductsModel;
  dealsCount: number[] = [];
  intervalId: any | undefined;
  constructor(private dealsService: ProductdealsService) {}
  async ngOnInit() {
    this.isLoading = true;
    this.dealsService.getDeals().subscribe((dealProducts) => {
      this.dealProducts = dealProducts;
      this.currentProduct = this.dealProducts[0];
      this.dealsCount = Array.from(
        { length: this.dealProducts.length },
        (_, i) => i + 1
      );
      // console.log(this.dealProducts);
      this.isLoading = false;
    });
    this.startInterval();
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
    this.clearInterval();
  }

  ngOnDestroy() {
    this.clearInterval();
  }

  startInterval() {
    this.intervalId = setInterval(this.changeImage, 6000);
  }

  clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}
