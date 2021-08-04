//imports
import pokemonSrc from '../img/pokemon-icon.jpg';
import gengarSrc from '../img/gengar.png';
import abraSrc from '../img/abra.png';

//variables
const navIcon = document.getElementById('navIcon');
const gengarContainer = document.querySelector('.gengarContainer');
let abraContainer = document.querySelectorAll('.abraContainer');
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
  abraIcon = new Image();
  setAttributes(pokemonIcon, {src: pokemonSrc, height: 120, width: 300});
  setAttributes(gengarIcon, {src: gengarSrc, height: 150, width: 150});
  setAttributes(abraIcon, {src: abraSrc, height: 100, width: 150});
  gengarContainer.appendChild(gengarIcon);
  navIcon.appendChild(pokemonIcon);
  abraContainer.forEach(container => {
    container.innerHTML = `<img src = ${abraSrc} width = ${abraIcon.width} height = ${abraIcon.height} />`
  });
  
  
}


export default placeIcon;
