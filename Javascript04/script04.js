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

// FUNZIONE CON CALLBACK E PASSAGGIO DI PARAMETRI
function prodottoCallback(a, b, callback) {
  let prodotto = a * b;
  callback(prodotto);
}

prodottoCallback(4, 5, function (risultato) {
  console.log("Risultato ricevuto: ", risultato);
  console.log("Il doppio e': ", risultato * 2);
})

// CALLBACK ANNIDATI
function primaFase(num, dopoDoppio) {
  let raddoppio = num * 2;
  console.log("Numero raddoppiato:", raddoppio);
  dopoDoppio(raddoppio);
}

function secondaFase(n, dopoSottrazione) {
  let sottrai = n - 2;
  console.log("Valore dopo la sottrazione:", sottrai);
  dopoSottrazione(sottrai);
}

primaFase(5, function (valoreRaddoppiato) {
  secondaFase(valoreRaddoppiato, function (risultatoFinale) {
    console.log("Risultato finale:", risultatoFinale)
  })
})