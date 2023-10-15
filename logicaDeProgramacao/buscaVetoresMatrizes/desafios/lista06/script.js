// Para resolver esse problema, crie uma função chamada obterValorComDescontodeve:

// Receber um array de objetos com os atributos valorOriginal e porcentagemDoDesconto.

// Retornar um array de objetos com os atributos valorOriginal e valorComDesconto, onde o atributo valorComDesconto é o valor do produto com a porcentagem do desconto aplicada.

const descontos = [
  { valorOriginal: 1500, porcentagemDoDesconto: 50 },
  { valorOriginal: 89, porcentagemDoDesconto: 20 },
  { valorOriginal: 100, porcentagemDoDesconto: 75 },
];

function obterValorComDescontodeve(descontos) {
  const novoArrayDescontos = [];
  let novoValorOriginal = 0;
  let novoValorDesconto = 0;

  let valor = 0;
  let desconto = 0;

  for (let i = 0; i < descontos.length; i++) {
    novoValorOriginal = descontos[i].valorOriginal;

    valor = descontos[i].valorOriginal;
    desconto = descontos[i].porcentagemDoDesconto;

    novoValorDesconto = valor - (valor * desconto) / 100;

    novoArrayDescontos.push({
      valorOriginal: novoValorOriginal,
      valorComDesconto: novoValorDesconto,
    });
  }
  return novoArrayDescontos;
}

const resultado = obterValorComDescontodeve(descontos);
console.log(resultado);

// const descontos = [
//   { valorOriginal: 1500, valorComDesconto: 750 },
//   { valorOriginal: 89, valorComDesconto: 71.2 },
//   { valorOriginal: 100, valorComDesconto: 25 },
// ];

// const descontos = [
//   { valorOriginal: 1500, porcentagemDoDesconto: 50 },
//   { valorOriginal: 89, porcentagemDoDesconto: 20 },
//   { valorOriginal: 100, porcentagemDoDesconto: 75 },
// ];

// function obterValorComDescontodeve(descontos) {
//   const novoArrayDescontos = [];

//   for (let i = 0; i < descontos.length; i++) {
//     novoArrayDescontos.valorOriginal = descontos[i].valorOriginal;

//     novoArrayDescontos.valorComDesconto =
//       descontos[i].valorOriginal -
//       (descontos[i].valorOriginal * descontos[i].porcentagemDoDesconto) / 100;
//   }
//   return novoArrayDescontos;
// }

// const resultado = obterValorComDescontodeve(descontos);
// console.log(resultado);
