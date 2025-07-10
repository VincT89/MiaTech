// DICHIARAZIONE VARIABILI
let nome;
const genere = "Maschile";
nome = "Mario";
// console.log(nome);
// console.log(genere);

// CAMBIO DI VALORE
let num = 5;
// console.log(num);
num = 10;
// console.log(num);

// RIDEFINIZIONE DI VARIABILI
let number = 5;
{
  let number = 10;
  // console.log(number); 
}
// console.log(number); 

// SCOPING VARIABILI
let outside = 12;
{
  let inside = 15;
  // console.log(outside, inside);
}
// console.log(outside, inside);

// GENERA NUMERI PARI

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//NUMERI DISPARI DECRESCENTI
let n = 10;
while (n >= 1) {
  if (n % 2 !== 0) {
    console.log(n);
  }
  n--;
}

// PROMPT
// let word = prompt('Inserisci una parola');
// console.log(word);

// LUNGHEZZA PAROLA PROMPT
// ciaoc
// console.log(lunghezzaParola);

// RICHIESTA INPUT CORRETTO
// let parola;
// do {
//   parola = prompt("Inserisci una parola di almeno 5 caratteri:");
// } while (parola.length < 5);

// console.log(parola);

// IF/ELSE
let numero2 = 8;
if (numero2 > 5) {
  console.log("La variabile è maggione di 5");
} else {
  console.log('La variabile è minore di 5')
}

// IF/ELSE ELSEIF
// let score = parseInt(prompt('Inserisci il tuo punteggio:'));
// if (score >= 90 && score <= 100) {
//   console.log("Voto: Ottimo")
// } else if (score >= 70 && score <= 89) {
//   console.log('Voto: Buono')
// }else if (score >= 60 && score <= 69) {
//   console.log('Voto: Sufficiente')
// }else if (score <= 59) {
//   console.log('Voto: Insufficiente')
// }

// VERIFICA IL RISULTATO
// let score = parseInt(prompt('Inserisci il tuo punteggio:'));
// switch (true) {
//   case (score >= 90 && score <= 100):
//     console.log("Voto: Ottimo");
//     break;
//   case (score >= 70 && score <= 89):
//     console.log("Voto: Buono");
//     break;
//   case (score >= 60 && score <= 69):
//     console.log("Voto: Sufficiente");
//     break;
//   case (score <= 59):
//     console.log("Voto: Insufficiente");
//     break;
//   default:
//     console.log("Valore non valido")
// }

// ARRAY NUMERI
let arrNum = [1, 2, 3, 4, 5];
console.log(arrNum);