import { createAction } from 'typesafe-actions';

type Index = number;

export const cartAdd = createAction('@cart/ADD')<IndexedPokemon>();
export const cartRemove = createAction('@cart/REMOVE')<Index>();
export const cartClear = createAction('@cart/CLEAR')();
