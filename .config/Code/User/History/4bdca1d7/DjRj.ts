import { Routes } from '@angular/router';
import { ObservableComponent } from './misc/components/observable/observable.component';
import { SignalComponent } from './misc/components/signal/signal.component';
export const routes: Routes = [
  {path:'',}
  {path : 'observables',component:ObservableComponent},
  {path : 'signals',component:SignalComponent}
];
