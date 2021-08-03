const pokeContainer = document.getElementById('pokeContainer');
const pokemonNumber = 150;

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  console.log(pokemon);
}
getPokemon(1);