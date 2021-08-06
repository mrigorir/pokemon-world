// imports
import getPokemon from './getPokemon.js';

// functions
const fetchPokemons = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20');
  const pokemons = await response.json();
  const { results } = pokemons;
  results.forEach((pokemon) => {
    getPokemon(pokemon.url);
  });
};

export default fetchPokemons;
