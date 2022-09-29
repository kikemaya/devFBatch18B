"use strict";

const gabriela = (function () {
  let nombre = "gabriela";
  let _edad = 24;
  let _pais = "Argentina";

  function getEdad() {
    return "Hola, tengo " + _edad + " años";
  }

  function setEdad(nuevaEdad) {
    _edad = nuevaEdad;
    return _edad;
  }

  return {
    nombre,
    getEdad,
    setEdad,
  };
})();

gabriela.setEdad(25);
gabriela.setEdad(35);
console.log(gabriela.getEdad());
console.log(gabriela.nombre);
