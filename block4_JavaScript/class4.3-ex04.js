let n = 7;

let a = n/2;
let b = 1; 
let c = n/2;  

for (let i = n/2; i > 0; i--){ 
    let esquerda =" ".repeat(a);
    let estrela ="*".repeat(b);
    let direita =" ".repeat(c);

    console.log(esquerda+estrela+direita);

    a -= 1;
    b += 2;
    c -= 1;
}