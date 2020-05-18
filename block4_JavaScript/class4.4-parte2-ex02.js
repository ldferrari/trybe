// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 3, 10, 6, 12, 1];

function positionArrayMaior(array){
    let maior = 0;
    for (let i in array){
        if (array[i] > maior){
            maior = array[i];
        }
    }
    let position = 0;
    for (let i in array){
        if (array[i] == maior){
            position = i;

            return position;
        }
        
    }   
     
}
console.log(positionArrayMaior(array));