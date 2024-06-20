import { createAction, props } from "@ngrx/store";
import { Person } from "../../models/person-interface";

export const add = createAction('[Person] Add', props<{person:Person}>);
export const remove = createAction('[Person] Remove', props<{id:number}>);
export const clear = createAction('[Person] Clear');