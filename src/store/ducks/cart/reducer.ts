import { createReducer } from 'typesafe-actions';
import { cartAdd, cartClear, cartRemove } from './actions';

const INIT_STATE: CartState = {
  list: [],
};

export default createReducer(INIT_STATE)
  .handleAction(cartAdd, (state, action) => ({
    ...state,
    list: [...state.list, action.payload],
  }))
  .handleAction(cartRemove, (state, action) => ({
    ...state,
    list: state.list.filter((_, i) => i !== action.payload),
  }))
  .handleAction(cartClear, () => INIT_STATE);
