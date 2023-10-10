//2) Escreva uma função que encontre o valor máximo em um vetor de números.

function allValue(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
}

const arr = [3, 6, 5, 1, 8, 3];

allValue(arr);
