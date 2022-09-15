function soyCien() { return 100 }
function soyDoscientos() { return 200 }

function sumaDosFunciones(unaFuncion, otraFuncion) {
  const suma = unaFuncion() + otraFuncion()
  return suma
}

console.log(sumaDosFunciones(soyCien, soyDoscientos))