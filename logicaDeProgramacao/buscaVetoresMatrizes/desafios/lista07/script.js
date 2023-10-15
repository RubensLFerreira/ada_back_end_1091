// Agora você tem que sempre trazer o nome da primeira imobiliaria, para ela ficar selecionada por default no nosso dropdown.
// Para resolver esse problema, crie uma função chamada retornarPrimeiraImobiliaria que deve:

// Receber um array de string onde cada string seja o nome de uma imobiliaria.
// Retornar uma string que seja referente ao nome da primeira imobiliaria da lista.
// Utilize a função shift() da API do Javascript para is

const imobiliarias = ["Arantes", "Terra Nova", "Ivan", "Seratto", "Azaleia"];

function retornarPrimeiraImobiliaria(imobiliarias) {
  const primeiraImobiliaria = imobiliarias.shift();
  return primeiraImobiliaria;
}

const resultado = retornarPrimeiraImobiliaria(imobiliarias);
console.log(resultado);