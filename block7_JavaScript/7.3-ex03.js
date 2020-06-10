const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui

assert.strictEqual(mySum([1, 2, 3, 4]), 10, 'Erro');
assert.strictEqual(mySum([1, -2, -3, 4]), 0, 'Erro');