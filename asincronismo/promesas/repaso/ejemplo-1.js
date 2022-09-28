// la instancia de una clase/prototipo, es un objeto

// Formas de usar las promesas
// 1. Creando las reglas de la promesa
let x = 10;

const traerHelado = new Promise((resolve, reject) => {
  if (x === 10) {
    return resolve("Ten el helado");
  }
  return reject("No cumplì mi promesa...");
});

// 2. Recibiendo promesas como respuesta
traerHelado
  .then((response) => {
    console.log(response);
    return "adios";
  })
  .then((response2) => {
    let y = 2;
    console.log(y + 8);
    console.log(response2);
  })
  .catch((error) => {
    console.error(error);
  });
