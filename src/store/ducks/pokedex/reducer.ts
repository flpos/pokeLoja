import { createReducer } from 'typesafe-actions';
import { typesRequest, selectType, pokemonRequest } from './actions';

const generatePrice = () => Math.random() * 3 + 7;

const getIdFromURL = (url: string) => Number.parseInt(url.split('/')[6]);

const INIT_STATE: PokedexState = {
  AvailibleTypes: [],
  indexedPokemon: {},
};

export default createReducer(INIT_STATE)
  .handleAction(typesRequest.success, (state, action) => ({
    ...state,
    AvailibleTypes: action.payload,
  }))
  .handleAction(selectType, (state, action) => ({
    ...state,
    selectedType: state.AvailibleTypes.find((t) => t.name === action.payload),
  }))
  .handleAction(pokemonRequest.success, (state, action) => {
    const indexedPokemon: Dictionary<IndexedPokemon> = {
      ...state.indexedPokemon,
    };
    for (const pokemon of action.payload) {
      if (!indexedPokemon[pokemon.name])
        indexedPokemon[pokemon.name] = {
          name: pokemon.name,
          price: generatePrice(),
          id: getIdFromURL(pokemon.url),
        };
    }
    return {
      ...state,
      pokemon: action.payload,
      indexedPokemon,
    };
  });
