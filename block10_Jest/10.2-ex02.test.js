function rand() {
    Math.round(nMath.random() * 101)
}

test('testndo a função com jest.fn', () => {
    rand = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(rand(100, 2)).toBe(50);
    expect(rand).toHaveBeenCalled();
    expect(rand).toHaveBeenCalledTimes(1);
    expect(rand).toHaveBeenCalledWith(100, 2)
})