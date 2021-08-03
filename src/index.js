import './styles/font.css';
import './styles/style.css';

const pokeContainer = document.getElementById('pokeContainer');
const pokemonNumber = 20;

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  // console.log(pokemon);
  createPokemonCard(pokemon);
}

const fetchPokemons = async () => {
  for (let i=0; i<=pokemonNumber; i++){
    await getPokemon(i)
  }
}

function createPokemonCard(pokemon) {
  const pokeCard = document.createElement('div');
  pokeCard.classList.add('pokemonCard');

  const pokeCardInnerHTML = ` `;

  pokeCard.innerHTML = pokeCardInnerHTML;

  pokeContainer.appendChild(pokeCard);
}
// getPokemon(1);