import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PromisesComponent } from './Components/promises/promises.component';
import { ObservableComponent } from './Components/observable/observable.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { HttpComponent } from './Components/http/http.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'observables', component: ObservableComponent },
  { path: 'subject', component: SubjectsComponent },
  { path: 'http', component: HttpComponent },
  { path: 'inputoutput', component: InputOutputComponent },
  { path: 'promises', component: PromisesComponent },
];
