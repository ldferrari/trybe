// Exercício 1: Adicione a categoria "superhero" ao filme Batman.
// Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o dessa imagem:

const db;

use movies;

db.movies.updateOne(
{"title": "Batman"},{ $push: {"category": "superhero"}}
);


db.movies.find({"title": "Batman"},{}).pretty();
