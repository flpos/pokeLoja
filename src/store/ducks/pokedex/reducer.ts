import { createReducer } from 'typesafe-actions';
import { typesRequest, selectType, pokemonRequest } from './actions';
import { ActionType } from 'typesafe-actions';

declare type RootAction = ActionType<typeof import('./actions')>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}

const INIT_STATE: PokedexState = {
  AvailibleTypes: [],
};

export default createReducer(INIT_STATE)
  .handleAction(typesRequest.success, (state, action) => ({
    AvailibleTypes: action.payload,
  }))
  .handleAction(selectType, (state, action) => ({
    ...state,
    selectedType: action.payload,
  }))
  .handleAction(pokemonRequest.success, (state, action) => ({
    ...state,
    pokemon: action.payload,
  }));
