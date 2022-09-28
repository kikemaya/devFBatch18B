'use strict'

const promesa = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(
    // Operador ternario
    (_) => number > 4 // true or false
    ? resolve(number)
    : reject(new Error(`El numero es menor a 5, el numero fue ${number}`))
  , 1000);
});

promesa
.then((number) => console.log(number))
.catch((error) => console.log(error))

// true o false 
// 5 > 6 ? return : console.log("Esta mal")