// FUNZIONE DI BASE CON CALLBACK
function calcola(x, y, callback) {
  let somma = x + y;
  console.log(`La somma di ${x} e ${y} è: ${somma}`);
  callback(somma);
}

calcola(5, 5, function (risultato) {
  if (risultato % 2 === 0) {
    console.log("Il risultato è pari")
  } else {
    console.log("Il risultato è dispari")
  }
});