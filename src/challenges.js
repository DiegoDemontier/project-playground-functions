// Desafio 1
function compareTrue(compare1, compare2) {
  let comparacao = Boolean;
  if (compare1 === true && compare2 === true) {
    comparacao = true;
  } else {
    comparacao = false;
  }
  return comparacao;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(palavras) {
  let arrayPalavras = palavras.split(' ');
  return arrayPalavras;
}

// Desafio 4
function concatName(arrayString) {
  let palavra = `${arrayString[arrayString.length - 1]} ${arrayString[0]}`;
  return palavra;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3 + ties * 1);
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let quantidadeVezes = 0;

  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
      quantidadeVezes = 1;
    } else if (numeros[i] === maiorNumero) {
      quantidadeVezes += 1;
    }
  }
  return quantidadeVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = 0;
  let dist2 = 0;
  let pegaRato = '';

  dist1 = cat1 - mouse;
  dist2 = cat2 - mouse;

  if (Math.abs(dist1) === Math.abs(dist2)) {
    pegaRato = 'os gatos trombam e o rato foge';
  } else if (Math.abs(dist1) > Math.abs(dist2)) {
    pegaRato = 'cat2';
  } else {
    pegaRato = 'cat1';
  }

  return pegaRato;
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
