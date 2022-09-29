// local scope, con la aparicion de let y const, se divide
// en: local scope de funcion y local scope de bloque
// var, tiene alcance de funcion pero no de bloque
var hello = "adios, estoy loco";

function helloWorld() {
  var hello = "hello";

  return console.log(hello);
}

console.log(hello);
helloWorld();
