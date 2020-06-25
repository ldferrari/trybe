

//  1. A função sum(a, b) retorna a soma do parâmetro a com o b
//  Teste se o retorno de sum(4, 5) é 9
//  Teste se o retorno de sum(0, 0) é 0
//  Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
//  Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

//  2. A função myIndexOf(arr, item) recebe um array arr, um item e retorna 
//  o índice do item ou -1 caso o item não pertença ao array arr
//  Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
//  Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado

function myIndexOf(arr, item) {
    let searchedIndex = -1;
    for (let i = 0; i < arr.length; i += 1) {
      if (item === arr[i]) {
        searchedIndex = i;
      }
    }
    return searchedIndex;
  }
  
  module.exports = {
      sum, 
      myIndexOf
    }