import './styles/font.css';
import './styles/style.css';

const pokeContainer = document.getElementById('pokeContainer');
const pokemonNumber = 90;

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  // console.log(pokemon);
  createPokemonCard(pokemon);
}

const fetchPokemons = async () => {
  for (let i=1; i<=pokemonNumber; i++){
    await getPokemon(i)
  }
}

fetchPokemons();

function createPokemonCard(pokemon) {
  const pokeCard = document.createElement('div');
  pokeCard.classList.add('pokemonCard');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const image = pokemon.sprites.front_default; 

  const pokeCardInnerHTML = ` 
  <div class="image-container">
  <img src="${image}">
  </div>
  ${name} `;

  pokeCard.innerHTML = pokeCardInnerHTML;

  pokeContainer.appendChild(pokeCard);
}
// getPokemon(1);