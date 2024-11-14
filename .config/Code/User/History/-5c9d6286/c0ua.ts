import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PromisesComponent } from './Components/promises/promises.component';

export const routes: Routes = [
    {path:'/',component:AppComponent}
    {path:'promises',component:PromisesComponent}
];
