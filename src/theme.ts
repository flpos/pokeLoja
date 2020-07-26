import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
  * {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

export const theme = {
  normal: { primary: '#A8A77A' },
  fire: { primary: '#EE8130' },
  water: { primary: '#6390F0' },
  electric: { primary: '#F7D02C' },
  grass: { primary: '#7AC74C' },
  ice: { primary: '#96D9D6' },
  fighting: { primary: '#C22E28' },
  poison: { primary: '#A33EA1' },
  ground: { primary: '#E2BF65' },
  flying: { primary: '#A98FF3' },
  psychic: { primary: '#F95587' },
  bug: { primary: '#A6B91A' },
  rock: { primary: '#B6A136' },
  ghost: { primary: '#735797' },
  dragon: { primary: '#6F35FC' },
  dark: { primary: '#705746' },
  steel: { primary: '#B7B7CE' },
  fairy: { primary: '#D685AD' },
};
