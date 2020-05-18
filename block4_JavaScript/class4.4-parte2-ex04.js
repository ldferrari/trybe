// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let name = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestName(name){
    let maior = name[0];
    for (let i in name){
        if (name[i].length > maior.length){
            maior = name[i];  
        } 
    }
return maior;
}
console.log(biggestName(name));
