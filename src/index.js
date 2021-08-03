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
  const info = document.createElement('div');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const image = pokemon.sprites.front_default;

  const pokeCardInnerHTML = ` 
  <div class="image-container">
  <img class="pokeImage" src="${image}">
  </div>
  <div class="pokeTitle">
  <p class="pokeName">${name}</p>
  <div class="likeContainer>
  <img class="likes" src="${image}">
  <p class="numberOfLikes">${5} Likes </p>
  </div>  
  </div>   
  <button class="commentBtn"> Comments </button>   
  `;

  pokeCard.innerHTML = pokeCardInnerHTML;

  pokeContainer.appendChild(pokeCard);
}
// getPokemon(1);