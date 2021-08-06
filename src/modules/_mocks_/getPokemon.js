const pokeList = document.createElement('div');
const div = document.createElement('div');
div.innerHTML = `
<p> This is the first item </p>`;
pokeList.appendChild(div);

const numberOfPokemons = () => {
  const pokeCount = pokeList.children.length;
  return pokeCount;
};

export { numberOfPokemons };