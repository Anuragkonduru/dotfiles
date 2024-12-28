import { createReducer, on } from "@ngrx/store";
import { AppState } from "./app.state";
import { add, clear, remove, updateAllState } from "./app.action";

export const initialState: AppState = {
    items:[],
}

export const itemReducer = createReducer(
    initialState,
    on(add, (state, { product }) => {
        ...state,
        items:[...state.items,product]
    }),
on(remove, (state, { product }) => ({
        ...state,
        items:state.product.filter((p)=>product.id != p.id)
})),
    on(updateAllState, (state, { items }) => ({
        ...state,
        items:state.product.filter((p)=>product.id != p.id)
    })),
    on(clear, state => initialState)
)