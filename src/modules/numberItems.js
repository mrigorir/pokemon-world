//variables
const pokeTitle = document.getElementById('pokeTitle');

//functions
const numberItems = (counter) => {
  pokeTitle.innerHTML = `
    <h1 class="text-center main-title">Pokemons (${counter})</h1>`;
}

export default numberItems;