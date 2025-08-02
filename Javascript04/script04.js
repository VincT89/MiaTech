// FUNZIONE DI BASE CON CALLBACK
function calcola(x, y, callback) {
	let somma = x + y;
	console.log(`La somma di ${x} e ${y} è: ${somma}`);
	callback(somma);
}

calcola(5, 5, function (risultato) {
	if (risultato % 2 === 0) {
		console.log("Il risultato è pari");
	} else {
		console.log("Il risultato è dispari");
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
});

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
		console.log("Risultato finale:", risultatoFinale);
	});
});

// CREARE UNA PROMESSA SEMPLICE / GESTIONE DI UNA PROMESSA CON CATCH
function mostraMessaggio() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			let ok = true;
			if (ok) {
				resolve("Promessa risolta dopo 2 secondi!");
			} else {
				reject("Errore: qualcosa non ha funzionato!!");
			}
		}, 2000);
	});
}

mostraMessaggio()
	.then(function (messaggio) {
		console.log(messaggio);
	})
	.catch(function (errore) {
		console.log(errore);
	});

// PROMESSA CON FINALLY
function promiseFinally() {
	return new Promise(function (resolve, reject) {
		let successo = false;
		setTimeout(function () {
			if (successo) {
				resolve("Operazione risolta");
			} else {
				reject("Operazione rifiutata");
			}
		}, 2000);
	});
}

promiseFinally()
	.then(function (messaggio) {
		console.log(messaggio);
	})
	.catch(function (errore) {
		console.log(errore);
	})
	.finally(function () {
		console.log("Operazione completata");
	});

// CATENA DI PROMESSE SEMPLICI
function numeroCasuale() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			let numero = 0.1;
			if (numero < 0) {
				resolve(numero);
			} else {
				reject("Numero non valido");
			}
		}, 1000);
	});
}

numeroCasuale()
	.then(function (n) {
		return n * 2;
	})
	.then(function (raddoppiato) {
		return raddoppiato + 3;
	})
	.then(function (risultato) {
		console.log("Risultato finale:", risultato);
	})
	.catch(function (error) {
		console.log("Si è verificato un errore!", error);
	});

// CATENA DI PROMESSE CON CONDIZIONI
function catena() {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve(4);
		}, 1000);
	});
}

catena()
	.then(function (n) {
		if (n % 2 === 0) {
			console.log("Numero pari");
			return n * 2;
		} else {
			console.log("Numero dispari");
			return n + 5;
		}
	})
	.then(function (result) {
		console.log("Risultato:", result);
	});

// CATENA DI PROMESSE CON GESTIONE DEGLI ERRORI
function promessaCasuale() {
	return new Promise(function (resolve, reject) {
		let casuale = Math.random();
		setTimeout(() => {
			if (casuale > 0.5) {
				resolve(Math.floor(casuale * 10));
			} else {
				reject("Valore casuale troppo basso");
			}
		}, 1000);
	});
}

promessaCasuale()
	.then(function (numero) {
		console.log("Numero:", numero);
		return numero * 3;
	})
	.then(function (risultato) {
		console.log("Risultato dopo manipolazione:", risultato);
	})
	.catch(function (errore) {
		console.log("Errore", errore);
	});

// GESTIONE DEGLI ERRORI CON CATCH
function promessaRifiutata() {
	return new Promise(function (resolve, reject) {
		reject("Mi dispiace qualcosa è andato storto");
	});
}

promessaRifiutata().catch(function (e) {
	console.log(e);
});

// GESTIONE DEGLI ERRORI CON THEN E CATCH
function gestione(successo) {
	return new Promise(function (resolve, reject) {
		if (successo) {
			resolve("Operazione completata con successo");
		} else {
			reject("Operazione fallita");
		}
	});
}

gestione(true)
	.then(function (mex) {
		console.log(mex);
	})
	.catch(function (errore) {
		console.log(errore);
	});

// GESTIONE DEGLI ERRORI IN UNA CATENA DI PROMESSE
function controllaAutorizzazione() {
	return new Promise(function (resolve, reject) {
		let autorizzato = Math.random() > 0.5;
		setTimeout(() => {
			if (autorizzato) {
				resolve("Accesso consentito");
			} else {
				reject("Accesso negato");
			}
		}, 3000);
	});
}

controllaAutorizzazione()
	.then(function (m) {
		console.log(m);
		return "Benvenuto nel Sistema";
	})
	.then(function (saluto) {
		console.log(saluto);
	})
	.catch(function (e) {
		console.log(e);
	});

// UTILIZZO PROMISE.ALL
function caricaNotifiche() {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve(["Notifica 1", "Notifica 2", "Notifica 3"]);
		}, 1500);
	});
}

function caricaMessaggi() {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve([
				{ da: "Vincenzo", testo: "Tutto ok" },
				{ da: "Antonio", testo: "Sto benissimo" },
			]);
		}, 2500);
	});
}

Promise.all([caricaNotifiche(), caricaMessaggi()])
	.then(function ([notifiche, messaggi]) {
		console.log("Notifiche:", notifiche);
		console.log("Messaggi: ", messaggi);
	})
	.catch(function (errore) {
		console.log(errore);
	});

// UTILIZZO PROMISE.RACE
function caricaProfilo() {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve("Profilo Caricato");
		}, 3000);
	});
}

function caricaAnteprima() {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve("Anteprima disponibile");
		}, 1000);
	});
}

Promise.race([caricaProfilo(), caricaAnteprima()])
	.then(function (risultato) {
		console.log("Prima Promessa Risolta:", risultato);
	})
	.catch(function (errore) {
		console.log(errore);
	});
