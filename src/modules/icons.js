//imports
import pokemonSrc from '../img/pokemon-icon.jpg';
import gengarSrc from '../img/gengar.png';

//variables
const navIcon = document.getElementById('navIcon');
const gengarContainer = document.querySelector('.gengarContainer');
let pokemonIcon, gengarIcon, abraIcon;

//functions
const setAttributes = (icon, attrs = {}) => {
  for (let key in attrs) {
    icon.setAttribute(key, attrs[key]);
  }
}

const placeIcon = () => {
  pokemonIcon = new Image();
  gengarIcon = new Image();
  setAttributes(pokemonIcon, {src: pokemonSrc, height: 120, width: 300});
  setAttributes(gengarIcon, {src: gengarSrc, height: 150, width: 150});
  gengarContainer.appendChild(gengarIcon);
  navIcon.appendChild(pokemonIcon);
}

export default placeIcon;
