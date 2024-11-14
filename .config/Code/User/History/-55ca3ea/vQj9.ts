import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppModule { }
