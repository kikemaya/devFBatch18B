// necesitamos al menos 3 cosas:
// - funcion padre
// - una variable de la funcion padre que sea usada por la funcion hijo
// - retornar una ò màs funcion(es) anidada(s)/hija(s)

function nombre() {
  let sam = "Sam";
  function saludar() {
    return `Hola, ${sam}`;
  }
  return saludar;
}

console.log(nombre()());
