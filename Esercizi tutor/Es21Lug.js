function quanteVocali(str) {
	let vocali = "aeiouAEIOU";
	let conteggio = 0;
	let unici = [...new Set(str)]; //rimuove i duplicati, non puo contenere duplicati
	for (let char of unici) {
		if (vocali.includes(char)) {
			conteggio++;
		}
	}
	return conteggio;
}
console.log(quanteVocali("oooooo"));

function contaVocali(frase) {
	let vocali = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	let conteggio2 = 0;
	let senzaDuplicati = frase.split("").filter((item, index) => frase.indexOf(item) === index);
	for (let i = 0; i < senzaDuplicati.length; i++) {
		if (vocali.includes(senzaDuplicati[i])) {
			conteggio2++;
		}
	}
	return conteggio2;
}
console.log(contaVocali("oooooo"));
