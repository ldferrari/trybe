let salarioBruto = 3000;

let salarioBase = 0;
let salarioLiquido = 0;

// aliquata INSS
if (salarioBruto <= 1556.94){
    salarioBase = salarioBruto - (salarioBruto*0.08);
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - (salarioBruto*0.09);
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - (salarioBruto*0.11);
}
else if (salarioBruto > 5189.82){
    salarioBase = salarioBruto - 570.88;
}

// aliquata IR
if (salarioBase <= 1903.98){
    console.log("Salário liquido R$"+(salarioBase));
}    
else if (salarioBase > 1903.98 && salarioBase <= 2826.65){
    console.log("Salário liquido R$"+(salarioBase-(salarioBase*0.075) + 142.80));
}
else if (salarioBase > 2826.65 && salarioBase <= 3751.05){
    console.log("Salário liquido R$"+(salarioBase-(salarioBase*0.15) + 354.80));
}
else if (salarioBase > 3751.05 && salarioBase <= 4664.68){
    console.log("Salário liquido R$"+(salarioBase-(salarioBase*0.225) + 636.13));
}
else{
    console.log("Salário liquido R$"+(salarioBase-(salarioBase*0.275) + 869.36));
}