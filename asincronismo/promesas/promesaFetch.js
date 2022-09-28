"use strict";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const url2 = "https://rickandmortyapi.com/api/character/235";

function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

getData(url)
  .then((data) => {
    console.log("Data ", data);
  })
  .catch((error) => {
    console.log("Error ", error);
  });

getData(url2)
  .then((data) => {
    console.log("Data ", data);
  })
  .catch((error) => {
    console.log("Error ", error);
  });


// Con la herramienta Promise.all puedes lanzar varias promesas al mismo tiempo
// y esperar una sola respuesta con toda la informacion en un arreglo
// const promesaPokemon = getData(url);
// const promesaRAndM = getData(url2);
// const promesas = [promesaPokemon, promesaRAndM];

// Promise.all(promesas)
//   .then((response) => {
//     const [pokemon, personajeRM] = response;
//     console.log("pokemon ", pokemon);
//     console.log("personajeRM ", personajeRM);
//   })
//   .catch((error) => {
//     console.log("error ", error);
//   });
