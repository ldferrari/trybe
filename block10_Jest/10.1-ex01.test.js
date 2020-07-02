const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  }

  test('testar o uppercase', (done) => {
    uppercase('casa', (str) => {
        expect(str).toBe('CASA');
        done(); 
    });
  })