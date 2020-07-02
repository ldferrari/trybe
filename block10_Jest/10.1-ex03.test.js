const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

describe('getUserName - promise', () => {
    describe('quando o ID existe', () => {
        test('Retonrne o nome', async () => {
            expect.assertions(1);    
            await getUserName(4).then(userName => 
                expect(userName).toEqual('Mark'));
        });
    })
    describe('quando o ID não existe', () => {
        test('ID não encontrado', async () => {
            expect.assertions(1);
            try {
                await getUserName(2)
            } catch(error) {
                expect(error).toEqual({error: 'User with 2 not found.'})
            }
        });
    });
})