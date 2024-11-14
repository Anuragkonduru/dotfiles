import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PromisesComponent } from './Components/promises/promises.component';
import { ObservableComponent } from './Components/observable/observable.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'observables', component: ObservableComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'promises', component: PromisesComponent },
];
