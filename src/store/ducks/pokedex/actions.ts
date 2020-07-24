import { createAsyncAction, createAction } from 'typesafe-actions';

export const typesRequest = createAsyncAction(
  '@typeRequest/LOAD',
  '@typeRequest/SUCCESS',
  '@typeRequest/FAILURE'
)<undefined, Array<PokemonType>, string>();

export const pokemonRequest = createAsyncAction(
  '@pokemonRequest/LOAD',
  '@pokemonRequest/SUCCESS',
  '@pokemonRequest/FAILURE'
)<string, Array<Pokemon>, string>();

export const selectType = createAction('@type/SELECT')<PokemonType>();
