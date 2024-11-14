import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  imageUrls = [
    '/assets/Images/',
    '/assets/Images/',
    '/assets/Images/',
    '/assets/Images/',
    '/assets/Images/',
    '/assets/Images/',
    '/assets/Images/',
  ];
  bgImage = this.imageUrls[0];
  i = 0;
  constructor() {}

  changeImage = () => {
    if (this.i < this.imageUrls.length - 1) {
      this.i++;
    } else {
      this.i = 0;
    }
    this.bgImage = this.imageUrls[this.i];
    console.log(this.bgImage);
  };
  ngOnInit() {
    setInterval(this.changeImage, 6000);
  }
}
