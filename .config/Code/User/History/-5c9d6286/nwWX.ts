import { Routes } from '@angular/router';
import { FormsComponent } from './Components/forms/forms.component';
import { HttpComponent } from './Components/http/http.component';
import { InputOutputComponent } from './Components/input-output/input-output.component';
import { LifecycleComponent } from './Components/lifecycle/lifecycle.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ObservableComponent } from './Components/observable/observable.component';
import { PromisesComponent } from './Components/promises/promises.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';

export const routes: Routes = [
  { path: '', redirectTo: 'observables', pathMatch: 'full' },
  { path: 'observables', component: ObservableComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'http', component: HttpComponent },
  { path: 'inputoutput', component: InputOutputComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'forms', component: FormsComponent },
  { path: '**', component: NotfoundComponent },
];
