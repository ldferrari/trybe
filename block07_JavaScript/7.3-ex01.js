const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  console.log (a + b);
  return a + b;
  
}
sum(4, 5);

// implemente seus testes aqui
assert.strictEqual(sum(4, 5), 9, 'Erro');
assert.strictEqual(sum(0, 0), 0, 'Erro');
assert.strictEqual(sum(4, "5"), 'parameters must be numbers', "Error");
