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
  {
    path: '',
    redirectTo: 'observables',
    pathMatch: 'full',
    data: { animation: 'openClosePage' },
  },
  {
    path: 'observables',
    component: ObservableComponent,
    data: { animation: 'openClosePage' },
  },
  {
    path: 'promises',
    component: PromisesComponent,
    data: { animation: 'openClosePage' },
  },
  {
    path: 'subjects',
    component: SubjectsComponent,
    data: { animation: 'openClosePage' },
  },
  {
    path: 'http',
    component: HttpComponent,
    data: { animation: 'openClosePage' },
  },
  {
    path: 'inputoutput',
    component: InputOutputComponent,
    data: { animation: 'openClosePage' },
  },
  {
    path: 'lifecycle',
    component: LifecycleComponent,
    data: { animation: 'openClosePage' },
  },
  {
    path: 'forms',
    component: FormsComponent,
    data: { animation: 'openClosePage' },
  },
  {
    path: '**',
    component: NotfoundComponent,
    data: { animation: 'openClosePage' },
  },
];
