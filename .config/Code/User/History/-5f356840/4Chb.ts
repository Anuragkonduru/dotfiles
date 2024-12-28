import { Component, importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from '../../../states/app.reducer';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    StoreModule.forRoot({ item: favoriteReducer }),
  ],
  providers: [],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent {}
