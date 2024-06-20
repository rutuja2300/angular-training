import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/product-interface";

export const add = createAction('[Product] Add', props<{product:Product}>());
export const remove = createAction('[Product] Remove', props<{id:number}>());
export const clear = createAction('[Product] Clear');
export const clearAll = createAction('[Product] ClearAll');