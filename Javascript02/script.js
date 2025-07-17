// AUTOMOBILE
class Automobile {
  marca
  modello 
  anno 
  chilometraggio = 0
  #contatoreChiamate = 0;

  constructor(marca, modello, anno, chilometraggio) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = chilometraggio;
  }

  descrizione() {
    const avviso = this._controllaChilometri();
    this.#incrementaContatore();
    return `Marca: ${this.marca}, Modello: ${this.modello}, Anno: ${this.anno}, Chilometraggio attuale: ${this.chilometraggio} km  ${avviso}, Chiamate ricevute: ${this.#contatoreChiamate}`
  }
 
  // AGGIUNGI METODI & PROPRIETA'
  aggiungiChilometri(km) {
    if (km > 0) {
      this.chilometraggio += km;
    } else {
      console.error('Inserisci un valore positivo.')
    }
  }

  mostraChilometraggio() {
    return this.chilometraggio;
  }

  // METODO PRIVATO - ETA'

  #calcolaEtà() {
    const annoCorrente = new Date().getFullYear();
    return annoCorrente - this.anno;
  }

  mostraEtà() {
    const eta = this.#calcolaEtà();
    return `Età del veicolo: ${eta} anni`
  }

  // METODO PROTETTO - AVVISO
  _controllaChilometri() {
    const soglia = 100000;
    if (this.chilometraggio > soglia) {
      return `Attenzione: chilometraggio elevato: ${this.chilometraggio} km`;
    }
    return `Acquistabile`;
  }

  // METODO STATICO - CONFRONTO CHILOMETRAGGIO
  static confrontaChilometraggio(auto1, auto2) {
    if (auto1.chilometraggio > auto2.chilometraggio) {
      return `${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore (${auto1.chilometraggio} km)`;
    } else if (auto2.chilometraggio > auto1.chilometraggio) {
      return `${auto2.marca} ${auto2.modello} ha un chilometraggio maggiore (${auto2.chilometraggio} km)`;
    } else {
      return `Entrambe le auto hanno lo stesso chilometraggio (${auto1.chilometraggio} km)`
    }
  }

  // METODO PRIVATO - INCREMENTA CONTATORE
  #incrementaContatore() {
     this.#contatoreChiamate++;
  }

}

let auto = new Automobile('VW', 'Golf', 2020, 120000);
console.log(auto);

auto.aggiungiChilometri(80000);
console.log(auto.mostraChilometraggio());


// SOTTOCLASSE ELETTRICA
class Elettrica extends Automobile {
  autonomia
  
  constructor(marca, modello, anno, chilometraggio, autonomia) {
    super(marca, modello, anno, chilometraggio);
    this.autonomia = autonomia
  }

  descrizione() {
    const avviso = this._controllaChilometri();
    return `${super.descrizione()}, Autonomia batteria: ${this.autonomia} km, ${avviso}`;
  }

  ricarica(km) {
    if (km > 0) {
      this.autonomia += km;
    } else {
      console.error('Inserisci un valore positivo per la ricarica.')
    }
  }
}

let autoElettrica = new Elettrica('Tesla', 'Model 3', 2022, 1000000, 400)
console.log(autoElettrica.descrizione());

autoElettrica.ricarica(100);
console.log(autoElettrica.descrizione());


// SALUTA
Automobile.prototype.saluta = function () {
  return `Ciao! Sono una ${this.marca} ${this.modello}.`;
};

let auto2 = new Automobile('Fiat', 'Panda', 2015, 180000);
let autoElettrica2 = new Elettrica('Tesla', 'Model S', 2023, 10000, 500);

console.log(auto2.saluta());
console.log(autoElettrica2.saluta());
console.log(auto2.mostraEtà());
console.log(autoElettrica2.mostraEtà());
console.log(auto2.descrizione());
console.log(autoElettrica2.descrizione());

let confronto = Automobile.confrontaChilometraggio(auto, autoElettrica);
console.log(confronto);

