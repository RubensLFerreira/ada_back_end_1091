 //1) Escreva uma função que receba um vetor de números e retorne a soma de todos 
// os elementos.

function sumValues(arr) {
  let amount = 0;

  for (let i = 0; i < arr.length; i++) {
    amount += arr[i];
  }
  console.log(amount);
}

const arr = [3, 6, 5, 1, 8, 3];

sumValues(arr);
