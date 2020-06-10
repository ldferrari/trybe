const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Erro');
assert.strictEqual(myFizzBuzz(9), 'fizz', 'Erro');
assert.strictEqual(myFizzBuzz(10), 'buzz', 'Erro');
assert.strictEqual(myFizzBuzz(4), 4, 'Erro');
assert.strictEqual(myFizzBuzz('string'), false, 'Erro');