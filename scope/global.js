// Todos los valores, fuera de una funcion o un bloque de codigo, estan en el alcance global
var hello = "hola";
console.log("global", hello);

function mundo() {
  var world = "mundo";
  return console.log("funcion", hello, world);
}
mundo();

if (true) {
  console.log("bloque", hello);
}
