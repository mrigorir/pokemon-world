// imports
import { getLikes } from './likes.js';
import addCounterCommmentDOM from './numberItems.js';

// variables
const pokeList = document.getElementById('pokeList');

// functions
const displayPokemon = (pokemon) => {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const image = pokemon.sprites.front_default;
  const { id } = pokemon;
  const div = document.createElement('div');
  div.classList.add('card', 'col-md-3', 'mt-5', 'mx-5', 'card-border', 'p-0', 'bg-pokemon');
  div.innerHTML = `<div class="card-img-top abraContainer d-flex align-items-center justify-content-center pt-3">
        <img src="${image}" width="200" height="200" alt="I'm a pokemon!"/>
      </div>
        <div class="card-body">
          <h5 class="card-title d-flex align-items-center justify-content-around">
            <span class="name pe-3 fw-bold"> ${name} </span>
            <a href="#" class="text-dark text-decoration-none"> 
              <i class="fas fa-heart text-danger likes" data-id="${id}"> </i> 
              <span class="counter" data-id="${id}"> </span>
            </a>
          </h5>
        </div>
      <div class="card-footer d-flex align-items-center justify-content-center p-3 bg-card-footer">
        <button class="btn button info" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-id="${id}"> 
          Info
        </button>
      </div>
    </div>`;
  pokeList.appendChild(div);
  getLikes().then((result) => {
    result.forEach((like) => {
      if (parseInt(like.item_id, 10) === parseInt(id, 10)) {
        const span = document.querySelector(`span[data-id="${id}"]`);
        span.textContent = like.likes;
      }
    });
  });
  addCounterCommmentDOM();
};

const getPokemon = async (url) => {
  const response = await fetch(url);
  const pokemon = await response.json();
  displayPokemon(pokemon);
};

export default getPokemon;