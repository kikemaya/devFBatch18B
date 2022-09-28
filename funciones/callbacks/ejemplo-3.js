const hola = (nombre, unaFuncion) => {
  setTimeout(() => {
    console.log("Hola " + nombre);
    return unaFuncion();
  }, 1500);
};

const adios = () => {
  setTimeout(() => {
    console.log("adios");
  }, 1000);
};

hola("Sam", adios);
