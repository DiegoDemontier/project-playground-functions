// Desafio 10
function techList(tech, name) {
  tech.sort();
  let array = [];
  let saida = '';
  for (let index = 0; index < tech.length; index += 1) {
    array.push({ tech: tech[index], name: name }); 
  }
  if (array.length === 0) {
    saida = 'Vazio!';
  } else {
    saida = array;
  }
  return saida;
}

// Desafio 11
function validaNumero(numero) {
  let count = 0;
  let validador = false;
  for (let index1 = 0; index1 < numero.length; index1 += 1) {
    count = 0;
    for (let index2 = 0; index2 < numero.length; index2 += 1) {
      if (numero[index1] === numero[index2]) {
        count += 1;
        if (numero[index2] < 0 || numero[index2] > 11 || count >= 3) {
          validador = true;
        }
      }
    }
  }

  return validador;
}


function generatePhoneNumber(numeroArray) {
  let numero1 = '';
  let numero2 = '';

  for (let i = 0; i < numeroArray.length; i += 1) {
      if (validaNumero(numeroArray) === true) {
      numero2 = 'não é possível gerar um número de telefone com esses valores';
      break;
    } else if (i <= 1) {
      numero1 += (numeroArray[i]);
      if (i === 1) {
        numero2 += `(${numero1}) `;
      }
    } else if (i > 1 && i <= 6) {
      numero2 += (numeroArray[i]);
      if (i === 6) {
        numero2 += '-';
      }
    } else {
      numero2 += (numeroArray[i]);
    }
  }
  if (numeroArray.length !== 11) {
    numero2 = 'Array com tamanho incorreto.';
  }
  return numero2;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
