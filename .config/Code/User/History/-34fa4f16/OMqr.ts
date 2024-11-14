import { NgStyle } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnChanges {
  imageUrls = [
    '/assets/Images/Keyboard_1.jpg',
    '/assets/Images/Keyboard_2.jpg',
    '/assets/Images/Keyboard_3.jpg',
    '/assets/Images/Keyboard_4.jpg',
    '/assets/Images/Keyboard_5.jpg',
    '/assets/Images/Keyboard_6.jpg',
    '/assets/Images/Keyboard_7.jpg',
  ];
  bgImage = this.imageUrls[0];
  i = 0;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  changeImage = () => {
    if (this.i < this.imageUrls.length - 1) {
      this.i++;
    } else {
      this.i = 0;
    }
    this.bgImage = this.imageUrls[this.i];
  };
  OnChanges() {
    setInterval(this.changeImage, 1000);
  }
}
