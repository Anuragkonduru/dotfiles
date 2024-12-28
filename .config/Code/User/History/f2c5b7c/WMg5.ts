import { createAction, props } from "@ngrx/store";
import { FavoriteProduct } from "./app.state";

export const add = createAction('[FavoriteProduct] Add', props < {item: FavoriteProduct} >);