import { createReducer } from "@ngrx/store";
import { AppState } from "./app.state";

export const initialState: AppState = {
    items:[],
}

export const itemReducer = createReducer(
    initialState,
    one(add)
)