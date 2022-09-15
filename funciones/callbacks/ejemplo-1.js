// Es cuando una funcion de orden mayor, ejecuta la(s) funcion(es) que tiene como parametro
// function ordenMayor(otraFuncion) {
//   return otraFuncion()
// }

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multi = (a, b) => a * b
const division = (a, b) => a / b

const calculadora = (a, b, operacion) => {
  return operacion(a, b)
}

console.log(calculadora(2, 8, suma))
console.log(calculadora(2, 8, resta))
console.log(calculadora(2, 8, multi))
console.log(calculadora(2, 8, division))

















