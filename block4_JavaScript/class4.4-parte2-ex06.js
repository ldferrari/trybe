// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

let number = 5;

function sumAll(number){    
let soma = 0;
    for(let i = 1; i <= number; i++){
        soma += i;
    }
return soma;
}
console.log(sumAll(number));
