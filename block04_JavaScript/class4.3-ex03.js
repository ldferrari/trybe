let n = 6;

let a = n;
let b = 1;   

for (let i = n; i > 0; i--){ 
    let vazio =" ".repeat(a);
    estrela ="*".repeat(b);
   
    console.log(vazio+estrela);

    a -= 1;
    b += 1;
}