function rand() {
    Math.round(Math.random() * 101)
}

test('testndo a função com jest.fn', () => {
    rand = jest.fn().mockReturnValue(10);

    expect(rand()).toBe(10);
    expect(rand).toHaveBeenCalled()
    expect(rand).toHaveBeenCalledTimes(1);
})