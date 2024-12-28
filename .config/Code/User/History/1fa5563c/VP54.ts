import { createReducer, on } from '@ngrx/store';
import { add, clear, remove, updateAllState } from './app.action';
import { AppState } from './app.state';

export const initialState: AppState = {
  items: [],
};

export const favoriteReducer = createReducer(
  initialState,
  on(add, (state, { product }) => ({
    ...state,
    items: [...state.items, product],
  })),
  on(remove, (state, { product }) => ({
    ...state,
    items: state.products.filter((p: { id: any; }) => product.id != p.id),
  })),
  on(updateAllState, (state, { items }) => ({
    ...state,
    items,
  })),
  on(clear, (state) => initialState)
);
