// Exercício 7: Adicione a categoria "90's" aos filmes Batman e Home Alone.
// Após a execução do método .find().pretty(), o resultado do filme Batman e do filme Home Alone será parecido com o dessa imagem:

const db;

use movies;

db.movies.updateMany(
{"title": { $in: ["Batman", "Home Alone"]}},{ $addToSet: {"category": "90's"}}
);


db.movies.find({"title": { $in: ["Batman", "Home Alone"]}},{}).pretty();
