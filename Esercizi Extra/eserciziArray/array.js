// 1.Prodotti disponibili in magazzino in maiuscolo
const products = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Mouse', price: 25, inStock: false },
  { id: 3, name: 'Keyboard', price: 75, inStock: true },
  { id: 4, name: 'Monitor', price: 350, inStock: false },
  { id: 5, name: 'Headphones', price: 85, inStock: true },
];

const disponibili = products
  .filter(prodotto => prodotto.inStock)
  .map(prodotto => prodotto.name.toUpperCase());

console.log(disponibili);

// 2.Totale carrello con sconto
const shoppingCart = [
  { item: 'Book', price: 15, quantity: 2 },
  { item: 'Pen', price: 2, quantity: 10 },
  { item: 'Notebook', price: 8, quantity: 3 },
  { item: 'Backpack', price: 45, quantity: 1 },
];

let totaleCarrello = 0;
shoppingCart.forEach(articolo => {
  totaleCarrello += articolo.price * articolo.quantity;
});

if (totaleCarrello > 100) {
  totaleCarrello = totaleCarrello * 0.9;
}

console.log(totaleCarrello);

// 3.Primo admin attivo e se esiste utente dall'Italia
const users = [
  { id: 1, name: 'John', active: true, role: 'user', country: 'USA' },
  { id: 2, name: 'Maria', active: false, role: 'admin', country: 'Spain' },
  { id: 3, name: 'Luigi', active: true, role: 'admin', country: 'Italy' },
  { id: 4, name: 'Anna', active: true, role: 'user', country: 'Germany' },
];

const primoAdmin = users.find(utente => utente.active && utente.role === 'admin');
const esisteItaliano = users.some(utente => utente.country === 'Italy');

console.log(primoAdmin, esisteItaliano);

// 4. Migliori 3 studenti
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'Diana', grade: 95 },
  { name: 'Eve', grade: 88 },
  { name: 'Frank', grade: 90 },
];

const top3 = students.sort((a, b) => b.grade - a.grade).slice(0, 3);
console.log(top3);

// 5.Estrarre tutti i tag unici in ordine alfabetico
const blogPosts = [
  { title: 'Post 1', tags: ['javascript', 'web', 'frontend'] },
  { title: 'Post 2', tags: ['nodejs', 'backend', 'javascript'] },
  { title: 'Post 3', tags: ['react', 'frontend', 'web'] },
  { title: 'Post 4', tags: ['mongodb', 'database', 'backend'] },
];

const tagsUnici = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();
console.log(tagsUnici);

// 6.Temperature sotto zero
const temperatures = [
  { day: 'Monday', temp: -2 },
  { day: 'Tuesday', temp: -5 },
  { day: 'Wednesday', temp: 1 },
  { day: 'Thursday', temp: -3 },
  { day: 'Friday', temp: 0 },
];

const sottoZero = temperatures.every(t => t.temp < 0);
const giorniFreddi = temperatures.filter(t => t.temp < 0);
console.log(sottoZero, giorniFreddi);

// 7.Email dipendenti
const employees = [
  { firstName: 'John', lastName: 'Doe', department: 'IT' },
  { firstName: 'Jane', lastName: 'Smith', department: 'HR' },
  { firstName: 'Bob', lastName: 'Johnson', department: 'Sales' },
  { firstName: 'Alice', lastName: 'Brown', department: 'IT' },
];

const emails = employees.map(e => `${e.firstName}.${e.lastName}@company.com`).join(', ');
console.log(emails);

// 8.Spesa per categoria
const transactions = [
  { id: 1, category: 'Food', amount: 25 },
  { id: 2, category: 'Transport', amount: 15 },
  { id: 3, category: 'Food', amount: 30 },
  { id: 4, category: 'Entertainment', amount: 50 },
  { id: 5, category: 'Transport', amount: 20 },
  { id: 6, category: 'Food', amount: 15 },
];

const spesaCategoria = transactions.reduce((acc, curr) => {
  acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
  return acc;
}, {});

console.log(spesaCategoria);

// const total = transactions.reduce((acc, tr) => {
//   //controlla se l'oggetto acc contiene la categoria in questione e la crea se non esiste
//   if (!acc[tr.category]) {
//     acc[tr.category] = 0
//   }
//   //somma alla categoria dell'oggetto corrente il valore di amount
//   acc[tr.category] += tr.amount

//   console.log(acc);

//   return acc
// }, {})

// 9.Eta' media utenti con email verificata
const userData = [
  { name: 'Tom', age: 25, emailVerified: true },
  { name: 'Lisa', age: 30, emailVerified: false },
  { name: 'Mike', age: 22, emailVerified: true },
  { name: 'Sarah', age: 28, emailVerified: true },
  { name: 'James', age: 35, emailVerified: false },
];

const utentiVerificati = userData.filter(utente => utente.emailVerified);
const etaMedia = utentiVerificati.reduce((acc, curr) => acc + curr.age, 0) / utentiVerificati.length;

console.log(etaMedia);

// 10. rimuovere task Id=3 e inserire nuovo
const tasks = [
  { id: 1, task: 'Study JavaScript', completed: true },
  { id: 2, task: 'Practice coding', completed: false },
  { id: 3, task: 'Read documentation', completed: false },
  { id: 4, task: 'Build project', completed: false },
];

const newTask = { id: 5, task: 'Review code', completed: false };

const indice = tasks.findIndex(t => t.id === 3);
tasks.splice(indice, 1, newTask);
console.log(tasks);

// 11.Raddoppiare punteggi >=60 e tenere solo quelli >100
const examScores = [
  { student: 'Alex', score: 45 },
  { student: 'Beth', score: 65 },
  { student: 'Carl', score: 55 },
  { student: 'Dana', score: 70 },
  { student: 'Eric', score: 80 },
];

const raddoppiati = examScores.map(s => {
  if (s.score >= 60) {
    s.score *= 2;
  }
  return s;
}).filter(s => s.score > 100);

console.log(raddoppiati);

// 12.Appiattire array e filtrare numeri >=5
const nestedNumbers = [
  [1, 2, [3, 4]],
  [5, [6, [7, 8]]],
  [9, 10],
  [[11, 12], 13],
];

const appiattito = nestedNumbers.flat(Infinity).filter(n => n >= 5);
console.log(appiattito);

// 13.Ordinare libri per anno e titolo
const library = [
  { title: 'The Great Gatsby', author: 'Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Lee', year: 1960 },
  { title: '1984', author: 'Orwell', year: 1949 },
  { title: 'Animal Farm', author: 'Orwell', year: 1945 },
  { title: 'Brave New World', author: 'Huxley', year: 1932 },
  { title: 'Fahrenheit 451', author: 'Bradbury', year: 1953 },
];

const libriOrdinati = library.sort((a, b) => {
  if (a.year === b.year) {
    return a.title.localeCompare(b.title); // Ordina per titolo se gli anni sono uguali e gestisce meglio maiuscole/minuscole, accenti e lingue
  }
  return a.year - b.year;
});

console.log(libriOrdinati);

// 14.Filtrare prodotti per categoria selezionate
const inventory = [
  { name: 'Shirt', category: 'Clothing', price: 30 },
  { name: 'Laptop', category: 'Electronics', price: 1000 },
  { name: 'Shoes', category: 'Footwear', price: 80 },
  { name: 'Phone', category: 'Electronics', price: 600 },
  { name: 'Jeans', category: 'Clothing', price: 50 },
  { name: 'Watch', category: 'Accessories', price: 200 },
];

const categorieSelezionate = ['Clothing', 'Electronics'];

const prodottiFiltrati = inventory.filter(item => categorieSelezionate.includes(item.category));
console.log(prodottiFiltrati);

// 15.Coppie chiave-valore in oggetto
const keyValuePairs = [
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York'],
  ['profession', 'Developer'],
  ['hobby', 'Photography'],
];

const oggettoRisultante = Object.fromEntries(keyValuePairs);
console.log(oggettoRisultante);

// 16.Aggiungere hasDiscount se include sale o promo
const catalog = [
  { id: 1, name: 'Tablet', tags: ['electronics', 'sale'] },
  { id: 2, name: 'Chair', tags: ['furniture', 'office'] },
  { id: 3, name: 'Desk', tags: ['furniture', 'promo', 'office'] },
  { id: 4, name: 'Lamp', tags: ['lighting', 'home'] },
];

catalog.forEach(item => {
  if (item.tags.includes('sale') || item.tags.includes('promo')) {
    item.hasDiscount = true;
  }
});

console.log(catalog);

// 17.Email utenti attivi, >25, dopo 2020
const accounts = [
  { email: 'John@EXAMPLE.com', age: 28, active: true, joinYear: 2021 },
  { email: 'MARY@example.COM', age: 24, active: true, joinYear: 2022 },
  { email: 'Bob@EXAMPLE.com', age: 30, active: false, joinYear: 2021 },
  { email: 'alice@Example.COM', age: 26, active: true, joinYear: 2019 },
  { email: 'TOM@example.com', age: 27, active: true, joinYear: 2023 },
];

const emailUtenti = accounts
  .filter(user => user.active && user.age > 25 && user.joinYear > 2020)
  .map(user => user.email.toLowerCase());

console.log(emailUtenti);

// 18.Primo mese con tutte settimane >1000
const monthlySales = [
  { month: 'Jan', weeks: [800, 1200, 900, 1100] },
  { month: 'Feb', weeks: [1100, 1200, 1500, 1300] },
  { month: 'Mar', weeks: [1200, 1100, 1400, 1300] },
  { month: 'Apr', weeks: [900, 1000, 1100, 800] },
  { month: 'May', weeks: [1100, 1200, 1300, 1400] },
];

const indiceMese = monthlySales.findIndex(m => m.weeks.every(w => w > 1000));
const validiDopo = monthlySales.slice(indiceMese).every(m => m.weeks.every(w => w > 1000));

console.log(indiceMese, validiDopo);

// 19.Prezzo ordini con sconti quantita'
const orders = [
  {
    orderId: 'A001',
    items: [
      { product: 'Widget', price: 10, quantity: 3 },
      { product: 'Gadget', price: 20, quantity: 2 },
    ],
  },
  {
    orderId: 'A002',
    items: [
      { product: 'Widget', price: 10, quantity: 5 },
      { product: 'Tool', price: 15, quantity: 6 },
    ],
  },
  {
    orderId: 'A003',
    items: [
      { product: 'Gadget', price: 20, quantity: 8 },
      { product: 'Tool', price: 15, quantity: 4 },
    ],
  },
];

const ordiniConSconto = orders.map(order => {
  const sconto = order.items.reduce((acc, item) => {
    if (item.quantity > 5) {
      return acc + item.price * item.quantity * 0.1; // Applica sconto del 10%
    }
    return acc;
  }, 0);
  return { orderId: order.orderId, total: sconto };
}).filter(order => order.total > 0);

console.log(ordiniConSconto);

// 20.Analizzare log
const logs = [
  {
    userId: 101,
    action: 'login',
    status: 200,
    responseTime: 120,
    timestamp: '2024-01-10T10:00:00',
  },
  {
    userId: 102,
    action: 'upload',
    status: 500,
    responseTime: 450,
    timestamp: '2024-01-10T10:05:00',
  },
  {
    userId: 101,
    action: 'download',
    status: 200,
    responseTime: 200,
    timestamp: '2024-01-10T10:10:00',
  },
  {
    userId: 103,
    action: 'login',
    status: 200,
    responseTime: 100,
    timestamp: '2024-01-10T10:15:00',
  },
  {
    userId: 102,
    action: 'login',
    status: 401,
    responseTime: 80,
    timestamp: '2024-01-10T10:20:00',
  },
  {
    userId: 104,
    action: 'upload',
    status: 200,
    responseTime: 300,
    timestamp: '2024-01-10T10:25:00',
  },
  {
    userId: 101,
    action: 'logout',
    status: 200,
    responseTime: 50,
    timestamp: '2024-01-10T10:30:00',
  },
  {
    userId: 103,
    action: 'download',
    status: 404,
    responseTime: 150,
    timestamp: '2024-01-10T10:35:00',
  },
];
// Estrai gli ID degli utenti con errori
const utentiErrore = Array.from(new Set(logs.filter(log => log.status !== 200).map(log => log.userId)));

// Conteggio delle azioni per utente
const conteggioAzioni = {};
logs.forEach(log => {
  if (!conteggioAzioni[log.userId]) {
    conteggioAzioni[log.userId] = {};
  }
  conteggioAzioni[log.userId][log.action] = (conteggioAzioni[log.userId][log.action] || 0) + 1;
});

// Filtra i log di successo
const successi = logs.filter(log => log.status === 200);
// Calcola il tempo medio di risposta
const tempoMedio = successi.reduce((acc, log) => acc + log.responseTime, 0) / successi.length;

// Ordina le azioni per utente e timestamp
const azioniOrdinate = logs.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

console.log(utentiErrore, conteggioAzioni, tempoMedio, azioniOrdinate);



