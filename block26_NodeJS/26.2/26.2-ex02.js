// Exercício 2: Agora, pegue a função do exercício 1 e refatore ela para async/await.
// Sua função tem que funcionar exatamente igual à do exercício 1, mas você não pode utilizar nenhum .then em seu código.

const matematica = async (a, b, c) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
     return Promise.reject(new Error("Digite apenas números"));
    }
    const soma = a + b;
    const total = soma*c;
    if (total < 50){
      return Promise.reject(new Error("Valor muito baixo"));
    }
    console.log(total);
    return Promise.resolve(total);
};

async function total(a,b,c) {
console.log(matematica(a, b, c));
};

matematica(20, 40, 3)