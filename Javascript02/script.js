// AUTOMOBILE
class Automobile {
  marca
  modello 
  anno 
  chilometraggio = 0

  constructor(marca, modello, anno, chilometraggio) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = chilometraggio;
  }

  descrizione() {
    return `Marca: ${this.marca}, Modello: ${this.modello}, Anno: ${this.anno}, Chilometraggio attuale: ${this.chilometraggio} km`;
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
    return `${super.descrizione()}, Autonomia batteria: ${this.autonomia} km`
  }

  ricarica(km) {
    if (km > 0) {
      this.autonomia += km;
    } else {
      console.error('Inserisci un valore positivo per la ricarica.')
    }
  }
}

let autoElettrica = new Elettrica('Tesla', 'Model 3', 2022, 80000, 400)
console.log(autoElettrica.descrizione());

autoElettrica.ricarica(100);
console.log(autoElettrica.descrizione());


// SALUTA
Automobile.prototype.saluta = function () {
  return `Ciao! Sono una ${this.marca} ${this.modello}.`;
};

let auto2 = new Automobile('Fiat', 'Panda', 2015, 80000);
let autoElettrica2 = new Elettrica('Tesla', 'Model S', 2023, 10000, 500);

console.log(auto2.saluta());
console.log(autoElettrica2.saluta());