const pokeContainer = document.getElementById('pokeContainer');
const pokemonNumber = 150;
const appId = 'mig5MtTLHwlt6LzMMgLA';

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  console.log(pokemon);
}
getPokemon(1);

const upDateLikes = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`
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
}

const getLikes = async (id) => {
  const urlAll = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes?item_id=${id}`
  const response = await fetch(url)
  const likes = await response.json();
  let results = await likes.filter(like => like.item_id === id);
  console.log(await results[0].likes);
  // return likes;
  // console.log(await response.json());
}

const upDateComment = async (id, username, comment) =>  {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      "item_id": id,
      "username": username,
      "comment": comment
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  console.log(await response.text());
}

const getComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`;
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  console.log(result[0].creation_date);
  console.log(result[0].username);
  console.log(result[0].comment);
  console.log(result[1].creation_date);
  console.log(result[1].username);
  console.log(result[1].comment);
  console.log(result[2].creation_date);
  console.log(result[2].username);
  console.log(result[2].comment);
}

// Number of comment == results.length;

export {getPokemon, upDateLikes, upDateComment, getComments};