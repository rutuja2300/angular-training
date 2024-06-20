import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectProductState = createFeatureSelector<AppState>('product');
export const Product=createSelector(
    selectProductState,
    (state:AppState)=>state.product
);