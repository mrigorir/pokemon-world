//imports
import { getPokemon } from "./getPokemon";

//functions
const fetchPokemons = async () => {
  let randomNumber = Math.floor(Math.random() * (600 - 10)) + 1;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=52&offset=${randomNumber}`)
  const pokemons = await response.json();
  const results = pokemons.results;
  results.forEach(pokemon => {
    getPokemon(pokemon.url)
  });
}

export { fetchPokemons };



