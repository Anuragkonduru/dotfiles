import { createAction, props } from "@ngrx/store";
import { FavoriteProduct } from "./app.state";

export const add = createAction('[FavoriteProduct] Add', props<{ items: FavoriteProduct }>());
export const remove = createAction('[FavoriteProduct] Remove', props<{ items: FavoriteProduct }>());
export const updateAllState = createAction('[FavoriteProduct] Update all state of items');