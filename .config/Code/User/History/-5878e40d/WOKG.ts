import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, FavoriteProduct } from './app.state';

// Get complete state of the favorites products in application
export const selectAppState = createFeatureSelector<AppState>('favorite');

// get All favorites products
export const selectProducts = createSelector(
  selectAppState,
  (state: AppState) => state.items
);

export const selectProductById = (props: { productId: number }) =>
  createSelector(selectProducts, (items: FavoriteProduct[]) =>
    items.find((product) => product.id === props.productId)
  );
