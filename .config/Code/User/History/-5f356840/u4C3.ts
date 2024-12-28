import { Component, importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from '../../../states/app.reducer';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [],
  providers: [
    importProvidersFrom(StoreModule.forRoot({ favorite: favoriteReducer })),
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent {}
