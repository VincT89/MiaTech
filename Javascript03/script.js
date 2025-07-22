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

// DESTRUCTURING CON VALORI PREDEFINITI
let persona2 = {
  nome: 'Giulia',
  città: 'Roma'
};

let {
  nome: nome2,
  eta: eta2 = 30, 
  città: città2,
  professione: professione2 = 'Disoccupato'
} = persona2;

console.log('Nome:', nome2);
console.log('Età:', eta2);
console.log('Città:', città2);
console.log('Professione:', professione2);

// COPIA DI UN ARRAY
let numArray = [10, 20, 30, 40, 50];
let copiaNumArray = [...numArray];
numArray.push(60);
console.log(numArray);
console.log(copiaNumArray);

// UNIONE DI DUE ARRAY
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayUnito = [...array1, ...array2];
console.log(arrayUnito);

// COPIA DI UN OGGETTO CON PROPRIETA' AGGIUNTIVE
let user = {
  nome: 'Vincenzo',
  cognome: 'Tito'
};

let userCopia = {
  ...user,
  mansione: 'Operaio'
}

console.log('Originale: ', user);
console.log('Copia: ', userCopia);

// FUNZIONE CON PARAMETRI VARIABILI
function somma(...numeri) {
  return numeri.reduce((totale, corrente) => totale + corrente, 0);
}

console.log('Somma 1:', somma(1, 2));
console.log('Somma 2:', somma(5, 10, 15));
console.log('Somma 3:', somma()); 

// DESTRUCTURING ARRAY CON REST OPERATOR
let number = [19, 6, 1989, 11, 2, 1993]
let [first, second, ...rest] = number;
console.log(first, second, rest);

// DESTRUCTURING OGGETTO CON REST OPERATOR
let prodotto = {
  id: 10,
  nomeProdotto: 'PlayStation',
  prezzo: 200.00,
  disponibilita: false
};
let { id, nomeProdotto, ...altro } = prodotto;
console.log(id, nomeProdotto, altro);

// CONVERSIONE DI UN OGGETTO IN UNA STRINGA JSON
let studente = {
  nome: 'Luca',
  voto: 30,
  materia: 'Chimica applicata'
}

let conversioneJSON = JSON.stringify(studente);
console.log(conversioneJSON);

// CONVERSIONE DI UNA STRINGA JSON IN UN OGGETTO
let jsonString = '{"marca":"Toyota","modello":"Yaris","anno":2021,"elettrica":false}';

let auto = JSON.parse(jsonString);
console.log(auto);
