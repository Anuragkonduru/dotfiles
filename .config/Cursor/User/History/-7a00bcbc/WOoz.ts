import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [CommonModule,BrowserModule, HttpClientModule], // Add HttpClientModule here
  providers: [ProductdealsService],
})
export class SharedModule {}
