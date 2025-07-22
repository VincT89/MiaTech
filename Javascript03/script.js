// ESTRAZIONE ELEMENTI BASE
let num = [1, 2, 3, 4, 5];
let [primo, secondo] = num;
console.log(primo, secondo);

// SALTARE ELEMENTI DURANTE IL DESTRUCTURING
const numeri = [10, 20, 30, 40, 50];
const [primoNum, , terzoNum] = numeri;
console.log(primoNum, terzoNum);

// DESTRUCTURING CON VALORI PREDEFINITI
let nume = [1, 2];
let [a = 0, b = 0, c = 0, d = 0, e = 0] = nume;
console.log(a, b, c, d, e);

// ESTRAZIONE DI PROPRIETA' BASE
let persona = {
  nome: 'Luca',
  eta: 36,
  professione: 'Sviluppatore'
};
let { nome, eta, professione } = persona;
console.log('Nome:', nome);
console.log('Età:', eta);
console.log('Professione:', professione);

// DESTRUCTURING CON NOME DI VARIABILI DIVERSI
let { nome: nomePersona, eta: anni, professione: lavoro } = persona;
console.log('Nome:', nomePersona);
console.log('Anni:', anni);
console.log('Professione:', lavoro);