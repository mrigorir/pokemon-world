
/**
 * @jest-environment jsdom
 */

import  { numberOfPokemons } from '../modules/_mocks_/getPokemon.js';


describe('Count items on the home page', () => { 

  test('It counts one item', () => {  
    const pokeList = document.createElement('div');  
    const div = document.createElement('div');
    div.innerHTML = `
    <p> This is the first item </p>`;
    pokeList.appendChild(div);
    expect(numberOfPokemons(pokeList)).toEqual(pokeList.children.length);
  })
})