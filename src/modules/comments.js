// imports
import appId from './apiInfo.js';
import addCounterCommmentDOM from './commentCounter.js';

const modalCommentsProfile = document.getElementById('modalCommentsProfile');

// functions
const getComments = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`);
  const result = await response.json();
  return result;
};

const displayComments = (comments) => {
  modalCommentsProfile.innerHTML = '';
  comments.forEach((comment) => {
    const p = document.createElement('p');
    p.classList.add('comment');
    p.innerHTML = `
    <span class="fw-bold"> ${comment.creation_date} - ${comment.username}: </span> 
    <span> ${comment.comment} </span>`;
    modalCommentsProfile.appendChild(p);
  });
};

const updateComments = async (id) => {
  const name = document.getElementById('input-name').value;
  const insight = document.getElementById('input-insight').value;
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`;
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: insight,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  getComments(id)
    .then((obj) => {
      const comments = obj;
      displayComments(comments);
      addCounterCommmentDOM();
    });
};

export { updateComments, getComments, displayComments };