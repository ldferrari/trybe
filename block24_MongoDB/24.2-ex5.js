// Exercício 5: Remova o último elemento do array category do filme Batman.
// Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o dessa imagem:

const db;

use movies;

db.movies.updateOne(
{"title": "Batman"},{ $pop: { "category": 1 }}
);

db.movies.find({"title": "Batman"},{}).pretty();
