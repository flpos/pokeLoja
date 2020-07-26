// Data Types
declare type TypeName =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';
declare interface PokemonType {
  name: TypeName;
  url: string;
}
declare interface Pokemon {
  name: string;
  url: string;
}
declare interface IndexedPokemon {
  name: string;
  price: number;
  id: number;
}
interface Dictionary<T> {
  [key: string]: T;
}
// State
declare interface PokedexState {
  selectedType?: PokemonType;
  AvailibleTypes: Array<PokemonType>;
  pokemon?: Array<Pokemon>;
  indexedPokemon: Dictionary<IndexedPokemon>;
  filter: string;
  loading?: boolean;
}
