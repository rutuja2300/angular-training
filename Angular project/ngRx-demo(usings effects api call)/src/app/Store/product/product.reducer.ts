import { createReducer, on } from '@ngrx/store';
import { AppState, initialState } from '../app.state';
import { add, clear, clearAll, remove } from './product.actions';

export const productReducer = createReducer(
  initialState,
  on(add, (state: AppState, { product }: any) => {
    console.log('add reducer called', JSON.stringify(product));

    return {
      ...state,
      product: [...state.product, product],
    };
  }),
  on(remove, (state: AppState, { pid }: any) => ({
    ...state,
    product: state.product.filter((p) => p.id != pid),
  })),
  on(clear, (state: AppState) => ({
    ...state,
    product: [],
  }))
);initialState
on(clearAll, (state) => initialState
  )
