//variables
//const appId = 'mig5MtTLHwlt6LzMMgLA';
const appId = 'N4LwpXNFR6xltKz6AMIT';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`;

//functions
const getLikes = async () => {
  const response = await fetch(url);
  const likes = await response.json();
  console.log(likes);
  return likes;
  /*let results = likes.filter(like => like.item_id === id);
  results.length === 0 ? results = 0 : results += results[0].likes;
  return results;*/
}

const upDateLikes = async (id) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      "item_id": id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },   
    
  })
  console.log(await response.text());
  getLikes().then(likes => {
    likes.forEach(obj => {
      const templateString = `span[data-id="${obj.item_id}"]`;
      let span = document.querySelector('span[data-id="30"]');
      //span.textContent = obj.likes;
      console.log(templateString);
    })
  });  
}

export {getLikes, upDateLikes};
