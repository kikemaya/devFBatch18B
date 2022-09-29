// var, tiene scope global y scope de funcion
// let y const tienen un scope global y local de bloque
const nombres = () => {
  var manuel = "manuel";
  if (true) {
    let gonzalo = "gonzalo";
    const angela = "angela";
    console.log(gonzalo, angela);
  }
  return console.log(manuel, gonzalo, angela);
};

console.log(manuel);
nombres();
