//imports
import './styles/font.css';
import './styles/style.css';
import placeIcon from './modules/icons';
import { fetchPokemons } from './modules/fetchPokemons';
import { getLikes, upDateLikes }   from './modules/likes';
import { pokeList } from './modules/getPokemon';

//listeners
window.addEventListener('DOMContentLoaded', () => {
  placeIcon();
  fetchPokemons();
});

pokeList.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('likes')) {
    let id = e.target.dataset.id;
    upDateLikes(id);
  }
});




