// Dichiarazione di variabili
let nome;
const genere = "Maschile";
nome = "Mario";
// console.log(nome);
// console.log(genere);

// Cambio di valore
let num = 5;
// console.log(num);
num = 10;
// console.log(num);

// ridefinizione di variabili
let number = 5;
{
  let number = 10;
  // console.log(number); 
}
// console.log(number); 

// scoping variabili
let outside = 12;
{
  let inside = 15;
  // console.log(outside, inside);
}
// console.log(outside, inside);

// Genera numeri pari

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Numeri dispari decrescenti
let n = 10;
while (n >= 1) {
  if (n % 2 !== 0) {
    console.log(n);
  }
  n--;
}

// Prompt
// let word = prompt('Inserisci una parola');
// console.log(word);

// lunghezza della parola
// ciaoc
// console.log(lunghezzaParola);

// richiesta di input corretto
let parola;
do {
  parola = prompt("Inserisci una parola di almeno 5 caratteri:");
} while (parola.length < 5);

console.log(parola);