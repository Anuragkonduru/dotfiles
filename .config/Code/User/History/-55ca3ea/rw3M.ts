import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { Routes } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    forRoot(routes)
  ]
})
export class AppModule { }
function forRoot(routes: Routes): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

