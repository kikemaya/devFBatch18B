"use strict";

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

function getData(url) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        console.log(xhttp.responseText);
      } else {
        console.log("Algo salio mal :(");
      }
    }
  };

  xhttp.send();
}

const data = getData()
console.log(data);