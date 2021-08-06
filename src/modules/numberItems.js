// functions
const numberItems = () => {
  const items = [...document.getElementById('pokeList').children];
  return items.length;
};

const addCounterItemstDOM = () => {
  document.querySelector('.counter').textContent = `(${numberItems()})`;
};

export default addCounterItemstDOM;
