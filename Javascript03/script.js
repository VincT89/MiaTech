// ESTRAZIONE ELEMENTI BASE
let num = [1, 2, 3, 4, 5];
let [primo, secondo] = num;
console.log(primo, secondo);

// SALTARE ELEMENTI DURANTE IL DESTRUCTURING
const numeri = [10, 20, 30, 40, 50];
const [primoNum, , terzoNum] = numeri;
console.log(primoNum, terzoNum);
