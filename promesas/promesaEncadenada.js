"use strict";

const promesa = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(() => {
    number > 3
      ? resolve(number)
      : reject(`El numero es menor a 3 -> ${number}`);
  }, 1000);
});

function suma(num1, num2) {
  return num1 + num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

promesa
.then((numeroRandom) => {
  console.log('Primer numero random ', numeroRandom);
  return suma(numeroRandom, 9)
})
.then((resultadoSuma) => {
  console.log('Segundo numero random ', resultadoSuma);
  return mult(resultadoSuma, 10)
}).then((resultadoMult) => {
  console.log('Tercer numero random ', resultadoMult);
})
.catch((error) => {
  console.log(error);
});

console.log('Hola');
