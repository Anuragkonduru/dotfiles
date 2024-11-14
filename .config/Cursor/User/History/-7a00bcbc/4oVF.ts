import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductdealsService } from './productdeals.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, HttpClientModule],
  providers: [ProductdealsService],
})
export class SharedModule {}
