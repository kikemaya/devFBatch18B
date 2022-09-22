"use strict";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const url2 = "https://rickandmortyapi.com/api/character/235";

function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}

const data = getData(url);
console.log("Get Data ", data);
