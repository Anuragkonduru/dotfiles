import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectAppState = createFeatureSelector<AppState>('favorite');

export const selectProducts = createSelector(
    selectAppState,
    (state:AppState) => state.items
)