 number = 7

let contador = 0
for (let i = 1; i <= number; i++){
    if (number % i == 0){
        contador +=1; 
    }
}
if (contador == 2){
    console.log("O numero "+number+" é primo." )
}
else{
    console.log("O numero "+number+" não é primo." )
}
