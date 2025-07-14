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
    return `Marca: ${this.marca}, Modello: ${this.modello}, Anno: ${this.anno}, Chilometraggio attuale: ${this.chilometraggio} km.`;
  }
}

let auto = new Automobile('VW', 'Golf', 2020, 120000);
console.log(auto);

