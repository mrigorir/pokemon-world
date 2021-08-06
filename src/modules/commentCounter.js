// functions
const commentItems = () => {
  const items = [...document.getElementById('modalCommentsProfile').children];
  return items.length;
};

export const addCounterCommmentDOM = () => {
  document.querySelector('.comment-counter').textContent = `(${commentItems()})`;
};

export default commentItems;
