import { combineReducers } from 'redux';

import pokedexReducer from './pokedex/reducer';

export default combineReducers({ pokedex: pokedexReducer });
