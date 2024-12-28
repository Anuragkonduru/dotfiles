import { Component, importProvidersFrom } from '@angular/core';

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
