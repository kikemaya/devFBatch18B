"use strict";

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const url2 = "https://rickandmortyapi.com/api/character/235";

function getData(url, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(JSON.parse(xhttp.responseText), null);
      } else {
        callback(null, "Algo salio mal");
      }
    }
  };

  xhttp.send();
  // Cuando una funcion no tiene return, retorna por defecto undefined
  // return undefined
}

// Siempre retornaria undefined por el asincronismo
// Lo que vemos.- const data = getData(url, callback)
// Lo que siempre retornaria = const data = undefined;

function datosPokemon(data, error) {
  console.log("Datos desde el callback", data, error);
}

getData(url, datosPokemon);

getData(url2, (data) => {
  console.log("Datos desde el callback", data, error);
});
