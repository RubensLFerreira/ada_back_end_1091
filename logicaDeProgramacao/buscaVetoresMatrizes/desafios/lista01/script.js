// Para resolver esse problema, crie uma função chamada clientesComSaldoDevedor que deve:

// 1. Receber um array de objetos onde cada objeto seja composto pelos atributos nome e comSaldoDevedor.

// 2. Retornar um array contendo somente os clientes com saldo devedor.

// 3. Utilize while no seu desenvolvimento.

const clientes = [
  { nome: "David", comSaldoDevedor: true },
  { nome: "Vinoth", comSaldoDevedor: true },
  { nome: "Divya", comSaldoDevedor: false },
  { nome: "Ishitha", comSaldoDevedor: false },
  { nome: "Thomas", comSaldoDevedor: true },
];

function clientesComSaldoDevedor(clientes) {
  let listaDevedores = [];
  let n = 0;

  while (n < clientes.length) {
    let encontrados = clientes[n].comSaldoDevedor;

    if (encontrados === true) {
      listaDevedores.push(clientes[n]);
    }
    n++;
  }
  return listaDevedores;
}

const devedores = clientesComSaldoDevedor(clientes);
console.log(devedores);
