function rand() {
    Math.round(Math.random() * 101)
}

describe('test com ject.fn', () => {
    test('testndo a função com jest.fn com três parametros', () => {
        rand = jest.fn().mockImplementation((a, b, c) => a + b + c)
        
        expect(rand(3, 6, 8)).toBe(17);
        expect(rand).toHaveBeenCalled();
        expect(rand).toHaveBeenCalledTimes(1);
        expect(rand).toHaveBeenCalledWith(3, 6, 8);
    });

    test('testndo a função com jest.fn com um parametro', () => {
        rand.mockReset();
        expect(rand).toHaveBeenCalledTimes(0);

        rand.mockImplementation((a) => a * 2);

        expect(rand (36)).toBe(72);
        expect(rand).toHaveBeenCalled();
        expect(rand).toHaveBeenCalledTimes(1);
        expect(rand).toHaveBeenCalledWith(36);
    });
});
