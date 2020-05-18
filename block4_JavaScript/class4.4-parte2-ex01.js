// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for.

let palindromo = "arara"

    function testePalindromo (palindromo){
    let inversor = palindromo.split('').reverse().join('');
        if(palindromo == inversor){
            return (true);
        }
        else{
            return(false);
        }
    }

    console.log(testePalindromo(palindromo));