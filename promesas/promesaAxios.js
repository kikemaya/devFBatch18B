"use strict";

const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

function getData(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

getData(url)
  .then((data) => {
    console.log("data ", data);
  })
  .catch((error) => {
    console.log("Error ", error);
  });

// Metodos de una peticion
// GET -> Pedir Datos
// POST -> Enviar Datos
// Delete -> Eliminar
// PUT -> Modificar todos los datos
// Patch -> Modificar datos parcialmente
