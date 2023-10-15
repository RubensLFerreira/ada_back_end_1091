const arvoreGenealogica = [
  { geracao: -3, masculino: "bisavô", feminino: "bisavó" },
  { geracao: -2, masculino: "avô", feminino: "avó" },
  { geracao: -1, masculino: "pai", feminino: "mãe" },
  {
    geracao: 0,
    masculino: "próprio individuo",
    feminino: "próprio individuo",
  },
  { geracao: 1, masculino: "filho", feminino: "filha" },
  { geracao: 2, masculino: "neto", feminino: "neta" },
  { geracao: 3, masculino: "bisneto", feminino: "bisneta" },
];

function posicaoNaArvoreGenealogica(numero, letra) {
  const linha = arvoreGenealogica.find((item) => item.geracao === numero);
  const coluna = letra === "m" ? linha.masculino : linha.feminino;

  return coluna;
}

const resultado = posicaoNaArvoreGenealogica(-3, "m");
console.log(resultado);
