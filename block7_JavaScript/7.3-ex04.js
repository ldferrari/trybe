const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 4], false);
assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], false);
let arr = [1, 2, 3, 4]
assert.notDeepEqual(myRemove((arr, 3), arr, false));
assert.deepEqual(myRemove([1, 2, 3, 4], 5),[1, 2, 3, 4], false);
