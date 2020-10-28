// Exercício 6: Adicione o elemento "action" ao array category do filme Batman, garantindo que esse valor não se duplique.
// Após a execução do método .find().pretty() o resultado do filme Batman será parecido com o dessa imagem:

const db;

use movies;

db.movies.updateOne(
{"title": "Batman"},{ $addToSet: {"category": "action"}}
);


db.movies.find({"title": "Batman"},{}).pretty();
