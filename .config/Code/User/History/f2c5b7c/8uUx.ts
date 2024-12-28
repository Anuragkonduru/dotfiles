import { createAction } from "@ngrx/store";

export const add = createAction('[FavoriteProduct] Add', props < {item: FavoriteProduct} >);