// imports
import './styles/font.css';
import './styles/style.css';
import placeIcon from './modules/icons.js';
import fetchPokemons from './modules/fetchPokemons.js';
import getModalInfo from './modules/modal.js';
import { updateLikes } from './modules/likes.js';
import { updateComments } from './modules/comments.js';

const form = document.getElementById('form');

// listeners
window.addEventListener('DOMContentLoaded', () => {
  placeIcon();
  fetchPokemons();
});

document.addEventListener('click', (e) => {
  const { id } = e.target.dataset;
  e.preventDefault();

  if (e.target.classList.contains('likes')) {
    updateLikes(id);
  } else if (e.target.classList.contains('info')) {
    getModalInfo(id);
  } else if (e.target.classList.contains('form-button')) {
    updateComments(id);
    form.reset();
  }
});
