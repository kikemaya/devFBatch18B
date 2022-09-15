//funciones anònimas autoejecutables/IIFE(Immediately invoked function expression). Siempre llevan ;
(function () {
  return console.log('Anonymous, bruh!...')
})();

(() => {
return console.log('Anonymous, bruh!... pero en arrow ;v');
})();

(function (a, b) {
  return console.log(a + b)
})(27, 36);

((a, b) => console.log(a + b))(78, 16);