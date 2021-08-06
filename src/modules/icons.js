// imports
import pokemonSrc from '../img/pokemon-icon.jpg';
import gengarSrc from '../img/gengar.png';

// variables
const navIcon = document.getElementById('navIcon');
const gengarContainer = document.querySelector('.gengarContainer');
let pokemonIcon; let gengarIcon;

// functions
const setAttributes = (icon, obj) => {
  Object.entries(obj).forEach((e) => icon.setAttribute(e[0], e[1]));
};

const placeIcon = () => {
  pokemonIcon = new Image();
  gengarIcon = new Image();
  setAttributes(pokemonIcon, { src: pokemonSrc, height: 120, width: 300 });
  setAttributes(gengarIcon, { src: gengarSrc, height: 150, width: 150 });
  gengarContainer.appendChild(gengarIcon);
  navIcon.appendChild(pokemonIcon);
};

export default placeIcon;
