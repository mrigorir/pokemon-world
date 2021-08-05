//variables
const appId = 'N4LwpXNFR6xltKz6AMIT';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

//functions
const getLikes = async () => {
  const response = await fetch(url);
  const likes = await response.json();
  return likes;
}

const upDateLikes = async (id) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      "item_id": id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },   
    
  })
  getLikes().then(likes => {
    likes.forEach(obj => {
      let span = document.querySelector(`span[data-id="${obj.item_id}"]`);
      if (span !== null) {
        span.textContent = obj.likes;
      }
    })
  });  
}

export {getLikes, upDateLikes};
