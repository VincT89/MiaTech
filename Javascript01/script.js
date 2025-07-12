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
	console.log("La variabile è minore di 5");
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

// SOMMA I NUMERI
let sum = 0;
for (let i = 0; i < arrNum.length; i++) {
	sum = sum + arrNum[i];
}
console.log(sum);

// ARRAY REVERSE
let invertito = [];
for (let i = arrNum.length - 1; i >= 0; i--) {
	invertito.push(arrNum[i]);
}
console.log(invertito);

// POPOLAMENTO ARRAY
// let parole = [];
// for (let i = 0; i < 5; i++){
//   let parola;
//   do {
//     parola = prompt(`Inserisci la parola ${i + 1} di 5:`)
//   } while (!parola) {
//     parole.push(parola);
//   }
// }

// for (let i = 0; i < parole.length; i++){
//   if (parole[i].length % 2 !== 0) {
//    console.log(parole[i])
//  }
// }

// CREA UN OGGETTO
let person = {
	name: "Vincenzo",
	age: 35,
	city: "Valenzano",
};
console.log(person);

// ACCEDI ALLE PROPRIETA'
console.log("Vincenzo ha" + " " + person.age + " " + "anni");

// MODIFICA LA PROPRIETA'
person.age = 36;
console.log("Vincenzo ha" + " " + person.age + " " + "anni");

// AGGIUNGI UNA NUOVA PROPRIETA'
person.job = "Geometra";
console.log("Il lavoro di" + " " + person.name + " " + " è il " + person.job);
console.log(person);

// ITERAZIONE DELLE PROPRIETA'
for (let key in person) {
	console.log(key + ": " + person[key]);
}

// FUNZIONI ANNIDATE
function outerFunction(x) {
	function innerFunction(y) {
		return x + y;
	}
	return innerFunction;
}

let test = outerFunction(2);
let risultato = test(3);
console.log(risultato);

// PERSISTENZA DELLE VARIABILI LOCALI
function outerFunction2(x, initialValue) {
	let result = initialValue;
	function innerFunction2(y) {
		result += y;
		return result;
	}
	return innerFunction2;
}

let aggiorna = outerFunction2(5, 4);
let persistenza = aggiorna(5);
console.log(persistenza);

// COUNTER
function createCounter() {
	let count = 0;

	return {
		increment: function () {
			count++;
			return count;
		},

		decrement: function () {
			count--;
			return count;
		},
	};
}

let counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

