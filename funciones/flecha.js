// La funcion flecha, nos da una sintaxis mas limpia
// y sencilla de leer

// las funciones flecha, se pueden almacenar como constantes o variables

// en las funciones flecha, no existe el objeto this.

const saludar = () => {
  console.log('Hola')
  return 'Mundo'
}

console.log(saludar());

// ==================================================
// reglas de sintaxis en arrow functions
// * Si tienes solo un argumento, le puedes quitar los parentesis
// * Si mi funcion solo retorna un valor, puedo quitar el return explicito, los parentesis y hacer uso del return implicito

const suma = (a, b) => a + b
console.log(suma(3, 6))

const saludar2 = persona => `Hola, ${persona}!`
console.log(saludar2('Arturo'))