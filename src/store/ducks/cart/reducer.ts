import { createReducer } from 'typesafe-actions';
import {
  cartAdd,
  cartClear,
  cartRemove,
  openFinishModal,
  closeFinishModal,
} from './actions';

const INIT_STATE: CartState = {
  list: [],
};

export default createReducer(INIT_STATE)
  .handleAction(cartAdd, (state, action) => ({
    ...state,
    list: [...state.list, action.payload].sort((a, b) => a.id - b.id),
  }))
  .handleAction(cartRemove, (state, action) => ({
    ...state,
    list: state.list.filter((_, i) => i !== action.payload),
  }))
  .handleAction(cartClear, () => INIT_STATE)
  .handleAction(openFinishModal, () => INIT_STATE)
  .handleAction(closeFinishModal, () => INIT_STATE);
