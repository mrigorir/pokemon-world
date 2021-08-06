// imports
import { getComments, displayComments } from './comments.js';
import addCounterCommmentDOM from './commentCounter.js';

// variables
const modalProfileTitle = document.getElementById('modalProfileTitle');
const modalImgProfile = document.getElementById('modalImgProfile');
const modalHeaderProfile = document.getElementById('modalHeaderProfile');
const modalInfoProfile = document.getElementById('modalInfoProfile');
const modalSubmitProfile = document.getElementById('modalSubmitProfile');

// functions
const populateModal = (result) => {
  modalProfileTitle.innerHTML = `
  <h3 class="modal-title fw-bold" id="staticBackdropLabel">${result.name} Profile </h3>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
  modalImgProfile.innerHTML = `
  <img src="${result.sprites.front_default}" width="200" height="200" />`;
  modalHeaderProfile.innerHTML = `
  <h1 class="text-center main-title pokemon-title mt-3"> ${result.name} </h1>`;
  modalInfoProfile.innerHTML = `
  <div class="info-container d-flex align-items-center justify-content-around mt-5">
  <p class="fw-bold h4"> Ability:    <span class="poke-info"> ${result.abilities[0].ability.name}  </span> </p>
  <p class="fw-bold h4"> Moves:      <span class="poke-info"> ${result.moves[0].move.name}         </span> </p>
  </div>
  <div class="info-container d-flex align-items-center justify-content-around mt-3">
  <p class="fw-bold h4"> Type:            <span class="poke-info"> ${result.types[0].type.name} </span> </p>
  <p class="fw-bold h4"> Base experience:  <span class="poke-info"> ${result.base_experience} </span> </p>
  </div>`;
  modalSubmitProfile.innerHTML = `<button type="submit" class="btn form-button mt-3" data-id="${result.id}"> Comment </button>`;
  getComments(result.id)
    .then((obj) => {
      const comments = obj;
      displayComments(comments);
      addCounterCommmentDOM();
    });
};

const getModalInfo = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const result = await response.json();
  populateModal(result);
};

export default getModalInfo;
