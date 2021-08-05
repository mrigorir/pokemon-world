//variables
const modalHeaderContainer = document.getElementById('modalHeaderContainer');
const modalNameContainer = document.getElementById('modalNameContainer');
const modalInfoContainer = document.getElementById('modalInfoContainer');
const modalImgContainer = document.getElementById('modalImgContainer');

//functions
const getModalInfo = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const result = await response.json();
  populateModal(result);
}

const populateModal = (result) => {
  modalHeaderContainer.innerHTML = `
    <h3 class="modal-title fw-bold" id="staticBackdropLabel">${result.name} Profile </h3>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
  modalNameContainer.innerHTML = `
    <h1 class="text-center pokemon-title mt-3"> ${result.name} </h1>`;
  modalInfoContainer.innerHTML = `
    <div class="info-container d-flex align-items-center justify-content-around mt-5">
      <p class="fw-bold h4"> Ability:    <span class="poke-info"> ${result.abilities[0].ability.name}  </span> </p>
      <p class="fw-bold h4"> Moves:      <span class="poke-info"> ${result.moves[0].move.name}         </span> </p>
    </div>
    <div class="info-container d-flex align-items-center justify-content-around mt-3">
      <p class="fw-bold h4"> Type:             <span class="poke-info"> ${result.types[0].type.name} </span> </p>
      <p class="fw-bold h4"> Base experience:  <span class="poke-info"> ${result.base_experience} </span> </p>
    </div>`;
  modalImgContainer.innerHTML = `
    <img src="${result.sprites.front_default}" width="200" height="200" />`;
}

export { getModalInfo }; 