// - Ele gostaria de saber qual é o volume total dessas caixas juntas.
// - Para resolver esse problema, crie uma função chamada calcularVolumeDeconstiasCaixas:

// 1. Receber um array de array onde cada array são as medidas de uma caixa.
// 2. Retornar um number que seja o volume total dessas caixas juntas.
// 3. Utilize a função `reducer()` em seu desenvolvimento.

const caixas = [
  [4, 2, 4],
  [3, 3, 3],
  [1, 1, 2],
  [2, 1, 1],
];

function calcularVolumeDeconstiasCaixas(caixas) {
  let somaArray = [];
  let multiplicaItemArray = 0;

  for (let i = 0; i < caixas.length; i++) {
    for (let j = 0; j < caixas[i].length; j++) {
      // multiplicaItemArray = caixas
      console.log('-', caixas[i][j]);
    }
  }
}

const resultado = calcularVolumeDeconstiasCaixas(caixas);
console.log(resultado); // expectativa 63
