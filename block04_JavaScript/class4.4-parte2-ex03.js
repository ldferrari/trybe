// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let array = [2, 4, 6, 7, 10, 0, -3];

function positionArrayMenor(array){
    let menor = array[1]; 
    for (let i in array){
        if(array[i] < menor){
            menor = array[i];
        }
    }
    let position = 0;
    for (let j in array){
        if(array[j] == menor){
            position = j;

        return position;   
        }
    }
}
console.log(positionArrayMenor(array));