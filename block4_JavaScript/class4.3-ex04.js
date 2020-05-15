let n = 5;

let a = n;
let b = 1;   

for (let i = n/2; i > 0; i--){ 
    let vazio =" ".repeat(a);
    estrela ="*".repeat(b);
   
    console.log(vazio+estrela);

    a -= 1;
    b += 2;
}