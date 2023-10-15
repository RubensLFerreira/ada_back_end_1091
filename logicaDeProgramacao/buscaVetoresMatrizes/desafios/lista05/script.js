const avaliacoes = [
  { totalDeClientes: 2, numeroDeEstrelas: 1 },
  { totalDeClientes: 15, numeroDeEstrelas: 2 },
  { totalDeClientes: 18, numeroDeEstrelas: 3 },
  { totalDeClientes: 25, numeroDeEstrelas: 4 },
  { totalDeClientes: 40, numeroDeEstrelas: 5 },
];

function calcularMediaAvaliacao(avaliacoes) {
  const clientes = 100;
  let totalDeAvaliacoes = 0;
  let somaDasAvaliacoes = 0;

  for (let i = 0; i < avaliacoes.length; i++) {
    totalDeAvaliacoes += avaliacoes[i].totalDeClientes;
    somaDasAvaliacoes +=
      avaliacoes[i].totalDeClientes * avaliacoes[i].numeroDeEstrelas;
  }

  if (totalDeAvaliacoes === clientes) {
    const resultado = somaDasAvaliacoes / totalDeAvaliacoes;
    return resultado;
  } else {
    return;
  }
}

const mediaDeAvaliacoes = calcularMediaAvaliacao(avaliacoes);
console.log(`À média de avaliações é ${mediaDeAvaliacoes}`);
