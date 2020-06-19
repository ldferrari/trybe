//Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
//Dica: use default params.

const assert = require('assert')

// escreva greet abaixo
let greet = (name, cumprimento) => {
    return `${cumprimento || "Hi"} ${name}`    
}


assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")