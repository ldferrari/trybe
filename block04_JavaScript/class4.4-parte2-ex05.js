//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let array = [2, 3, 2, 5, 8, 2, 3];

function maisRepetido(array){
let maiorRepetido = 0;
let valorMaisRepetido = 0;

for(let i in array){
    let repetição = 0;
    for(let a in array){
        if (array[i] == array [a]){
        repetição += 1
        }
        if (repetição > maiorRepetido){
            maiorRepetido = repetição;  
            valorMaisRepetido = array[i];
        }
    } 
}
return valorMaisRepetido;
}
console.log(maisRepetido(array));
