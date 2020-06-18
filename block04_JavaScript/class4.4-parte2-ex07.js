// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

let word = "trybe";
let ending = "be";

function endWord (word, ending){
    let resultado = true;
        for (let i = 0; i < ending.length; i++){
            if (word[word.length-i] !== ending[ending.length-i]){
                resultado = false;
            }
        }
    return resultado
}
console.log(endWord (word, ending));