// Action Types
declare enum TypeRequest {
  LOAD = '@pokeType/LOAD',
  SUCCESS = '@pokeType/SUCCESS',
  FAILURE = '@pokeType/FAILURE',
}
// Data Types
declare interface PokemonType {
  name: string;
  url: string;
}
declare interface Pokemon {
  name: string;
  url: string;
}
// State
declare interface PokedexState {
  selectedType?: PokemonType;
  AvailibleTypes: Array<PokemonType>;
  pokemon?: Array<Pokemon>;
}
