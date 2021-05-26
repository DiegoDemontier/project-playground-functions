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
  let palavra = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
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
function fizzBuzz(numeros) {
  let stringArray = [];
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      stringArray.push('fizzBuzz');
    } else if (numeros[i] % 3 === 0) {
      stringArray.push('fizz');
    } else if (numeros[i] % 5 === 0) {
      stringArray.push('buzz');
    } else {
      stringArray.push('bug!');
    }
  }
  return stringArray;
}

// Desafio 9
function encode(string1) {
  let stringA = '';
  let stringE = '';
  let stringI = '';
  let stringO = '';
  let stringU = '';
  stringA = string1.replace(/a/g, '1');
  stringE = stringA.replace(/e/g, '2');
  stringI = stringE.replace(/i/g, '3');
  stringO = stringI.replace(/o/g, '4');
  stringU = stringO.replace(/u/g, '5');
  return stringU;
}

function decode(string2) {
  let stringA = '';
  let stringE = '';
  let stringI = '';
  let stringO = '';
  let stringU = '';
  stringA = string2.replace(/1/g, 'a');
  stringE = stringA.replace(/2/g, 'e');
  stringI = stringE.replace(/3/g, 'i');
  stringO = stringI.replace(/4/g, 'o');
  stringU = stringO.replace(/5/g, 'u');
  return stringU;
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
