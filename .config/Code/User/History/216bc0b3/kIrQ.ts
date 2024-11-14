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
  currentProduct!: ProductsModel;
  dealsCount: number = 0;
  constructor(private dealsService: ProductdealsService) {}
  ngOnInit() {
    this.dealProducts = this.dealsService.getDeals();
    this.currentProduct =  this.dealProducts[0];
    this.dealsCount = Array(5)
      .fill()
      .map((x,this.dealProducts.length) => this.dealProducts.length); ;
    setInterval(this.changeImage, 6000);
  }

  changeImage = () => {
    if (this.i < this.currentProduct.images.length - 1) {
      this.i++;
    } else {
      this.i = 0;
    }
    this.currentProduct = this.dealProducts[this.i];
  };
}
