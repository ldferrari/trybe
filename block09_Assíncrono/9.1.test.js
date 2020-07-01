const noveUm = require('./9.1-exAll');

describe('testa o ex 01', () => {
   test('Teste se o retorno de sum(4, 5) é 9', () => {
       expect(noveUm.sum(4, 5)).toBe(9);
   });  
   test('Teste se o retorno de sum(0, 0) é 0', () => {
       expect(noveUm.sum(0, 0)).toBe(0);
   });
   test('Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)', () => {
       expect(() => {
        noveUm.sum(4,"5")
       }).toThrow();
   });
   test('Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")', () => {
       expect(() => {
        noveUm.sum(4,"5")
       }).toThrow('parameters must be numbers');
   });
});
 
describe('testa o ex 02', () => {
    test('Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o index', () => {
        expect(noveUm.myIndexOf([1, 2, 3, 4], 3)).toBe(2);
    });
    test('Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna -1', () => {
        expect(noveUm.myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
    });

});
