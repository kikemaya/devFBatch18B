"use strict";

function consumirApi() {
  const usuario = document.getElementById("usuario").value;
  const ciudad = document.getElementById("ciudad").value;

  fetch(`http://localhost:3000/usuarios?nombre=${usuario}&ciudad=${ciudad}`)
    .then((response) => response.json())
    .then((data) => {
      const etiqueta = document.getElementById("datos");
      etiqueta.innerHTML = data.res;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function agregarUsuarios() {
  const usuario = document.getElementById("usuario").value;
  const ciudad = document.getElementById("ciudad").value;
  const objetoDatos = {
    "nombre": usuario,
    "ciudad": ciudad
  }
  fetch(`http://localhost:3000/usuarios`, {
    method: "POST",
    body: objetoDatos,
  })
    .then((response) => response.json())
    .then((data) => {
      const etiqueta = document.getElementById("datos");
      etiqueta.innerHTML = data.res;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
