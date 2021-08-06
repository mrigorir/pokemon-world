// functions
const numberItems = () => {
  const items = [...document.getElementById('pokeList').children];
  return items.length;
};

export const addCounterItemstDOM = () => {
  document.querySelector('.counter').textContent = `(${numberItems()})`;
};

export default numberItems;
