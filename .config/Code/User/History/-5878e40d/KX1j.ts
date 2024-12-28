import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectAppstate = createFeatureSelector<AppState>('favorite');

export const selectProducts = createSelector(
    selectAppStore,
    (state:AppState) => state.items
)