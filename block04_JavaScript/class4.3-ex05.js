let n = 17;

let a = n/2;
let b = 1;
let c = 1;
let d = 1;
let e = n/2;  

for (let i = 0; i < 1; i++){ 
    let esquerda =" ".repeat(a);
    let estrela ="*".repeat(d);
    let direita =" ".repeat(e);
    
    a -= 1;
    e -= 1;

console.log(esquerda+estrela+direita);
}

for (let i = n/2; i > 2; i--){ 
    
    let esquerda =" ".repeat(a);
    let estrelae ="*".repeat(b);
    let centro =" ".repeat (c);
    let estrelad ="*".repeat(d)
    let direita =" ".repeat(e);

    a -= 1;
    c += 2;
    e -= 1;

console.log(esquerda+estrelae+centro+estrelad+direita);
}

for (let i = 0; i < 1; i++){ 
    
    let estrela ="*".repeat(n);
    
console.log(estrela);
}