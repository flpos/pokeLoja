import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import pokedexReducer from './pokedex/reducer';
import cartReducer from './cart/reducer';

type ActionsUnion =
  | typeof import('./pokedex/actions')
  | typeof import('./cart/actions');

declare type RootAction = ActionType<ActionsUnion>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}

export default combineReducers({ pokedex: pokedexReducer, cart: cartReducer });
