import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductdealsService } from './productdeals.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule],
  providers: [provideHttpClient(withInterceptorsFromDi(ProductdealsService))],
})
export class SharedModule {}
