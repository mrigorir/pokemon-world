//imports
import './styles/font.css';
import './styles/style.css';
import placeIcon from './modules/icons';
import { fetchPokemons } from './modules/fetchPokemons';
import { upDateLikes }   from './modules/likes';
import { pokeList } from './modules/getPokemon';
import { getModalInfo } from './modules/modal';

//variables
const form = document.getElementById('form');

//listeners
window.addEventListener('DOMContentLoaded', () => {
  placeIcon();
  fetchPokemons();
});

pokeList.addEventListener('click', (e) => {
  e.preventDefault();
  let id = e.target.dataset.id;
  if (e.target.classList.contains('likes')) {
    upDateLikes(id);
  }
  else if (e.target.classList.contains('info')) {
    getModalInfo(id);
  }
});



