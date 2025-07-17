// AUTOMOBILE
class Automobile {
	marca;
	modello;
	anno;
	_chilometraggio = 0;
	#contatoreChiamate = 0;

	constructor(marca, modello, anno, chilometraggio) {
		this.marca = marca;
		this.modello = modello;
		this.anno = anno;
		this._chilometraggio = chilometraggio;
	}

	descrizione() {
		const avviso = this._controllaChilometri();
		return `Marca: ${this.marca}, Modello: ${this.modello}, Anno: ${this.anno}, Chilometraggio attuale: ${this._chilometraggio} km  ${avviso}`;
	}

	// AGGIUNGI METODI & PROPRIETA'
	aggiungiChilometri(km) {
		if (km > 0) {
			this._chilometraggio += km;
		} else {
			console.error("Inserisci un valore positivo.");
		}
	}

	mostraChilometraggio() {
		return this._chilometraggio;
	}

	// METODO PRIVATO - ETA'

	#calcolaEtà() {
		const annoCorrente = new Date().getFullYear();
		return annoCorrente - this.anno;
	}

	mostraEtà() {
		const eta = this.#calcolaEtà();
		return `Età del veicolo: ${eta} anni`;
	}

	// METODO PROTETTO - AVVISO
	_controllaChilometri() {
		const soglia = 100000;
		if (this._chilometraggio > soglia) {
			return `Attenzione: chilometraggio elevato: ${this._chilometraggio} km`;
		}
		return `Acquistabile`;
	}

	// METODO STATICO - CONFRONTO CHILOMETRAGGIO
	static confrontaChilometraggio(auto1, auto2) {
		if (auto1.chilometraggio > auto2.chilometraggio) {
			return `${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore (${auto1._chilometraggio} km)`;
		} else if (auto2._chilometraggio > auto1._chilometraggio) {
			return `${auto2.marca} ${auto2.modello} ha un chilometraggio maggiore (${auto2._chilometraggio} km)`;
		} else {
			return `Entrambe le auto hanno lo stesso chilometraggio (${auto1._chilometraggio} km)`;
		}
	}

	// METODO PRIVATO - INCREMENTA CONTATORE
	#incrementaContatore() {
		this.#contatoreChiamate++;
	}

	// METODO PUBBLICO - AGGIUNGI CHILOMETRI
	aggiungiChilometri(km) {
		this.#incrementaContatore();
	}

	// METODO PUBBLICO -  MOSTRA CONTEGGIO
	mostraConteggioChiamate() {
		return `Hai ricevuto ${this.#contatoreChiamate} chiamata.`;
	}

	// GETTER
	get chilometraggio() {
		return this._chilometraggio;
	}

	// SETTER
	set chilometraggio(km) {
		if (km >= this._chilometraggio) {
			this._chilometraggio = km;
		} else {
			console.error("Il chilometraggio non può diminuire.");
		}
  }
  
  // METODO STATICO - VERIFICA ISTANZA
  static verificaIstanza(obj, classe) {
    if (obj instanceof classe) {
      return `L'oggetto è un' istanza di ${classe.name}`;
    } else {
      return `L'oggetto NON è un' istanza di ${classe.name}`
    }
  }
}

let auto = new Automobile("VW", "Golf", 2020, 120000);
console.log(auto);

auto.aggiungiChilometri(80000);
console.log(auto.mostraChilometraggio());

// SOTTOCLASSE ELETTRICA
class Elettrica extends Automobile {
	autonomia;

	constructor(marca, modello, anno, chilometraggio, autonomia) {
		super(marca, modello, anno, chilometraggio);
		this.autonomia = autonomia;
	}

	descrizione() {
		const avviso = this._controllaChilometri();
		return `${super.descrizione()}, Autonomia batteria: ${
			this.autonomia
		} km, ${avviso}`;
	}

	ricarica(km) {
		if (km > 0) {
			this.autonomia += km;
		} else {
			console.error("Inserisci un valore positivo per la ricarica.");
		}
	}
}

let autoElettrica = new Elettrica("Tesla", "Model 3", 2022, 1000000, 400);
console.log(autoElettrica.descrizione());

autoElettrica.ricarica(100);
console.log(autoElettrica.descrizione());

// SALUTA
Automobile.prototype.saluta = function () {
	return `Ciao! Sono una ${this.marca} ${this.modello}.`;
};

let auto2 = new Automobile("Fiat", "Panda", 2015, 180000);
let autoElettrica2 = new Elettrica("Tesla", "Model S", 2023, 10000, 500);

console.log(auto2.saluta());
console.log(autoElettrica2.saluta());
console.log(auto2.mostraEtà());
console.log(autoElettrica2.mostraEtà());
console.log(auto2.descrizione());
console.log(autoElettrica2.descrizione());

let confronto = Automobile.confrontaChilometraggio(auto, autoElettrica);
console.log(confronto);

console.log(auto.mostraConteggioChiamate());

auto.chilometraggio = 1120000;

// CAMION
class Camion extends Automobile {
	caricoMassimo;
	caricoAttuale = 0;

	constructor(marca, modello, anno, chilometraggio, caricoMassimo) {
		super(marca, modello, anno, chilometraggio);
		this.caricoMassimo = caricoMassimo;
	}

	descrizione() {
		return `${super.descrizione()}, Carico massimo: ${
			this.caricoMassimo
		} kg, Carico attuale: ${this.caricoAttuale} kg`;
	}

	carica(kg) {
		if (kg > 0) {
			if (this.caricoAttuale + kg < +this.caricoMassimo) {
				this.caricoAttuale += kg;
			} else {
				console.error("Superato il carico massimo consentito.");
			}
    } else {
      console.error("Inserisci un valore positivo per il carico.")
    }
	}
}

let camion = new Camion('Iveco', 'Stralis', 2020, 150000, 12000);

camion.carica(4000);
console.log(camion.descrizione());
camion.carica(13000);

let FiatPunto = new Automobile('Fiat', 'Punto', 2010, 90000);
let VolvoCamion = new Camion('Volvo', 'FH16', 2018, 180000, 20000);

console.log(FiatPunto instanceof Automobile);
console.log(FiatPunto instanceof Camion);
console.log(VolvoCamion instanceof Automobile);
console.log(VolvoCamion instanceof Camion);

console.log(Automobile.verificaIstanza(FiatPunto, Automobile));
console.log(Automobile.verificaIstanza(FiatPunto, Camion));
console.log(Automobile.verificaIstanza(VolvoCamion, Automobile));
console.log(Automobile.verificaIstanza(VolvoCamion, Camion));