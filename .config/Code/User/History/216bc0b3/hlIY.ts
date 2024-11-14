import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductdealsService } from '../../shared/productdeals.service';
import { ProductsModel } from '../../shared/Models/productmodel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  imageUrls = [
    '/assets/Images/cover1.png',
    '/assets/Images/cover2.png',
    '/assets/Images/cover3.png',
    '/assets/Images/cover4.png',
  ];
  bgImage = this.imageUrls[0];
  i = 0;
  dealProducts: ProductsModel[] = [];
  currentProduct!: ProductsModel;
  constructor(private dealsService: ProductdealsService) {}
  ngOnInit() {
    this.dealProducts = this.dealsService.getDeals();
    setInterval(this.changeImage, 6000);
  }

  changeImage = () => {
    if (this.i < this.imageUrls.length - 1) {
      this.i++;
    } else {
      this.i = 0;
    }
    this.bgImage = this.imageUrls[this.i];
    console.log(this.bgImage);
  };
}
