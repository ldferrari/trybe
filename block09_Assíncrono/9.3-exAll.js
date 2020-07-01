const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = (joke) => {
  let ul = document.querySelector("ul");
  let li = document.querySelector("li");
  li.innerHTML = joke;
  ul.appendChild(li);
};

window.onload = () => fetchJoke();
        
// const getRandomJoker = (item, calback) => {
//   return new Promise((resolve, reject) => {
//     $.getJSON(`https://icanhazdadjoke.com/search?term=${item}`, (date) => {
//       appendJoke(data.results[0].joke);
//     },
//     reject
//     )
//   })
// }

async function getJokes () {
  try {
    await getRandomJoker("ghost")
    await getRandomJoker("pizza")
    await getRandomJoker("wolf")
    await getRandomJoker("ant")
  } catch (error) {
    console.log(error)
  }
}
getJokes();

const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => console.log(data.joke));