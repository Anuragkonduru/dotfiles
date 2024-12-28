import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, FavoriteProduct } from "./app.state";

// Get complete state of the favorites products in application
export const selectAppState = createFeatureSelector<AppState>('favorite');


// get All favorites products
export const selectProducts = createSelector(
    selectAppState,
    (state: AppState) => state.items
);

export const selectProductById = ()=>( createSelector(
  selectProducts,
  (items: FavoriteProduct[], props: { productId: number }) =>
    items.find((product) => product.id === props.productId)
));