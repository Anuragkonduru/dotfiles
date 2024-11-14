import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductdealsService } from './productdeals.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, HttpClientModuindex.d.ts(3210, 4): The declaration was marked as deprecated here.
⚠ Error(TS6385) | 
HttpClientModule is deprecated.
(alias) class HttpClientModule
import HttpClientModule
Configures the dependency injector for HttpClient with supporting services for XSRF. Automatically imported by HttpClientModule.

You can add interceptors to the chain behind HttpClient by binding them to the multiprovider for built-in DI token HTTP_INTERCEPTORS.

@publicApi

@deprecated — use provideHttpClient(withInterceptorsFromDi()) as providers insteadle],
  providers: [ProductdealsService],
})
export class SharedModule {}
