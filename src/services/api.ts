const baseURL = 'https://pokeapi.co/api/v2/';

export const getTypes = () =>
  fetch(baseURL + 'type')
    .then((res) => {
      return res.json();
    })
    .then((result): PokemonType[] => {
      return result.results.slice(0, -2); // Tipos Unknown e Shadow vazios.
    });

export const getPokemonList = (url: string) =>
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result.pokemon.map((poke: any) => poke.pokemon);
    });
