// alcance lexico, buscar valores de adentro hacia afuera
var nombre = "Luis";

const saludar = () => {
  // var nombre = "Sam";
  if (true) {
    // let nombre = "Cecilia";
    console.log("bloque", nombre);
  }
  // console.log("funcion", nombre);
};

console.log("Global", nombre);
saludar();

// Ej. de scope de bloque
if (true) {
  var ramon = "ramon";
}

console.log(ramon);
