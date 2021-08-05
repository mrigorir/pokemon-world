//variables
const modalContainer = document.getElementById('staticBackdrop');

//functions
const getModalInfo = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const result = await response.json();
  populateModal(result);
}

const populateModal = (result) => {
  modalContainer.textContent = '';
  const div = document.createElement('div');
  div.classList.add('modal-content', 'bg-pokemon');
  div.innerHTML = `
    <div class="modal-content bg-pokemon">
      <div class="modal-header">
      <h3 class="modal-title fw-bold" id="staticBackdropLabel">${result.name} Profile </h3>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
      <div class="modal-body">
        <section id="pokemon-section" class="container-fluid p-0 m-0">
          <div class="row pokemon-board w-75 mx-auto">
            <div class="col-12">
              <div class="d-flex align-items-center justify-content-center mt-5">
              <img src="${result.sprites.front_default}" width="300" height="300" />
              </div>
            </div>
            <header>
              <h1 class="text-center pokemon-title mt-3"> ${result.name} </h1>
            </header>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="info-container d-flex align-items-center justify-content-around mt-5">
                <p class="fw-bold h4"> Ability:    <span class="text-secondary"> ${result.abilities[0].ability.name}  </span> </p>
                <p class="fw-bold h4"> Moves:      <span class="text-secondary"> ${result.moves[0].move.name}         </span> </p>
              </div>
              <div class="info-container d-flex align-items-center justify-content-around mt-3">
                <p class="fw-bold h4"> Type:             <span class=""> ${result.types[0].type.name}   </span> </p>
                <p class="fw-bold h4"> Base experience:  <span class=""> ${result.base_experience}      </span> </p>
              </div>
            </div>
          </div>
          <div class="row mx-3">
            <div class="col-12">
              <h1 class="text-center mt-5"> 
                Comments 
                <span class="fw-bold" id="comment-counter">
                  (2)
                </span>
              </h1>
              <div class="d-flex align-items-start flex-column my-5 border border-dark p-3 comment-board">
              <p class="comment">
                <span class="fw-bold" class="comment-name"> Marco: </span> 
                I want that Pokemon! 
              </p>
              <p class="comment">
                <span class="fw-bold" class="comment-name"> Julius: </span> 
                It's really nice. 
              </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h1 class="text-center my-3"> 
                Add a Comment
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mx-auto mb-5">
              <form action="" id="form" class="mx-auto w-75">
                <div class="form-group mt-4">
                  <input type="text" class="form-control-sm" placeholder="Your name" id="input-name">
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-group p-2" cols="50" rows="5" placeholder="Your insights" id="input-insight"></textarea>
                </div>
                <button type="submit" class="btn form-button mt-3">Comment</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
      </div>
    </div>`;
    modalContainer.appendChild(div);
}

export { getModalInfo }; 