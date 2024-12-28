import { createReducer, on } from "@ngrx/store";
import { AppState } from "./app.state";
import { add } from "./app.action";

export const initialState: AppState = {
    items:[],
}

export const itemReducer = createReducer(
    initialState,
    on(add, (state, { product }) => {
        ...state,
        products:[...state.items,product]
    })
)