const livros = [
  {
    autor: "Clarice Lispector",
    titulo: "A Hora da Estrela",
    livroID: 3245,
  },
  {
    autor: "Paulo Coelho",
    titulo: "O Alquimista",
    livroID: 4264,
  },
  {
    autor: "Machado de Assis",
    titulo: "Memórias Póstumas de Brás Cubas",
    livroID: 1254,
  },
];

function ordenarLivros(livros) {
  let ordemAlfabetica = "";

  ordemAlfabetica = livros.sort((a, b) => a.titulo.localeCompare(b.titulo));

  return ordemAlfabetica;
}

const resultado = ordenarLivros(livros);
console.log(resultado);
