// function fizzBuzz() {
//   for (let i = 1; i < 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log('FizzBuzz' + i);
//     } else if (i % 3 == 0) {
//       console.log('Fizz' + i);
//     } else if (i % 5 == 0) {
//       console.log('Buzz' + i)
//     }
//   }
// }

// fizzBuzz();


const studenti = [
  { nome: "Luca", cognome: "Rossi", eta: 20, voti: [28, 30, 26] },
  { nome: "Maria", cognome: "Bianchi", eta: 22, voti: [30, 30, 29] },
  { nome: "Giovanni", cognome: "Verdi", eta: 19, voti: [24, 27, 25] },
  { nome: "Elena", cognome: "Neri", eta: 21, voti: [29, 30, 28] }
];

function average(studenti) {
  let average = [];
  
  studenti.forEach(element => {
    let somma = 0;
    for (let i = 0; i < element.voti.length ; i++) {
      somma = somma + element.voti[i];
    }
    average.push(Math.floor(somma / element.voti.length));
  });
  console.log(average);
}
average(studenti);

// let number = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < number.length; i++) {
//   sum = sum + number[i];
// }

// console.log(sum);