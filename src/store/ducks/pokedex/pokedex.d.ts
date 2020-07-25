// Data Types
declare interface PokemonType {
  name: string;
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
}
