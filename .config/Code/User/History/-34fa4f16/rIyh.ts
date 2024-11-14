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
    '/assets/Images/Keyboard_1.jpg',
    '/assets/Images/Keyboard 2.jpg',
    '/assets/Images/Keyboard 3.jpg',
    '/assets/Images/Keyboard 4.jpg',
    '/assets/Images/Keyboard 5.jpg',
    '/assets/Images/Keyboard 6.jpg',
    '/assets/Images/Keyboard 7.jpg',
  ];
  bgImage = this.imageUrls[0];
  i = 0;
  constructor() {}
  ngOnInit() {
    this.changeImage();
  }

  changeImage() {
    this.bgImage = this.imageUrls[this.i];
    if (this.i < this.imageUrls.length - 1) {
      this.i++;
    } else {
      this.i = 0;
    }
    // setTimeout(this.changeImage(), 1000);
  }
}
