"use strict";

// El contexto de ejecucion, son las varibales, constantes, funciones,
// bloques, parametros de una funcion.
// Cada que se ejecuta una funcion, se crea un nuevo contexto de ejecucion

function sumador() {
  let cuenta = 0;

  function sumar() {
    return (cuenta += 1);
  }
  function restar() {
    return (cuenta -= 1);
  }

  return {
    sumar,
    restar,
  };
}

console.log("===================== ARTURO =====================");
const cuentaArturo = sumador();
cuentaArturo.sumar();
cuentaArturo.sumar();
console.log(cuentaArturo.sumar());

console.log("===================== ANGELA =====================");
const cuentaAngela = sumador();
cuentaAngela.sumar();
console.log(cuentaAngela.restar());
